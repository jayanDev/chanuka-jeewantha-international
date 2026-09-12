import { fireEvent, render, screen, waitFor, cleanup, act } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import GoogleAnalytics from "./GoogleAnalytics";
import { ANALYTICS_CONSENT_KEY, analyticsReferrer } from "@/lib/analytics";

const state = vi.hoisted(() => ({ path: "/contact", onReady: undefined as undefined | (() => void) }));
vi.mock("next/navigation", () => ({ usePathname: () => state.path }));
vi.mock("next/script", () => ({ default: (props: { onReady: () => void }) => {
  state.onReady = props.onReady;
  return <span data-testid="analytics-script" />;
} }));
vi.mock("next/link", () => ({ default: ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a> }));

beforeEach(() => {
  state.path = "/contact";
  state.onReady = undefined;
  localStorage.clear();
  window.dataLayer = [];
  delete window.gtag;
  vi.stubEnv("NEXT_PUBLIC_GA_MANUAL_EVENTS_READY", "true");
});
afterEach(() => { cleanup(); vi.unstubAllEnvs(); });

describe("GA4 activation", () => {
  it("does not load without configuration or consent", () => {
    vi.stubEnv("NEXT_PUBLIC_GA_MANUAL_EVENTS_READY", "false");
    render(<GoogleAnalytics measurementId="G-JBG5EY2YXW" />);
    expect(screen.queryByTestId("analytics-script")).toBeNull();
  });
  it("rejects optional tracking without loading Google", async () => {
    render(<GoogleAnalytics measurementId="G-JBG5EY2YXW" />);
    fireEvent.click(await screen.findByRole("button", { name: "Reject analytics" }));
    expect(localStorage.getItem(ANALYTICS_CONSENT_KEY)).toBe("rejected");
    expect(screen.queryByTestId("analytics-script")).toBeNull();
  });
  it("queues real gtag commands and records one page view per route", async () => {
    localStorage.setItem(ANALYTICS_CONSENT_KEY, "accepted");
    const view = render(<GoogleAnalytics measurementId="G-JBG5EY2YXW" />);
    await screen.findByTestId("analytics-script");
    const commands = () => window.dataLayer.map(x => Array.from(x as ArrayLike<unknown>));
    expect(commands()[0]).toEqual(["consent", "default", {
      analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied",
    }]);
    expect(commands()[1]).toEqual(["consent", "update", { analytics_storage: "granted" }]);
    expect(commands().filter(x => x[1] === "page_view")).toHaveLength(0);
    act(() => state.onReady?.());
    await waitFor(() => expect(commands().filter(x => x[1] === "page_view")).toHaveLength(1));
    expect(Object.prototype.toString.call(window.dataLayer[0])).toBe("[object Arguments]");
    const config = commands().find(x => x[0] === "config")?.[2];
    expect(config).toMatchObject({ send_page_view: false, allow_google_signals: false });
    state.path = "/pricing";
    view.rerender(<GoogleAnalytics measurementId="G-JBG5EY2YXW" />);
    await waitFor(() => expect(commands().filter(x => x[1] === "page_view")).toHaveLength(2));
    state.path = "/profile";
    view.rerender(<GoogleAnalytics measurementId="G-JBG5EY2YXW" />);
    expect((window as unknown as Record<string, unknown>)["ga-disable-G-JBG5EY2YXW"]).toBe(true);
    expect(commands().filter(x => x[1] === "page_view")).toHaveLength(2);
  });
  it("retains only an external referrer origin for attribution", () => {
    expect(analyticsReferrer("https://www.google.com/search?q=private", "https://example.com")).toBe("https://www.google.com/");
    expect(analyticsReferrer("https://example.com/profile?email=private", "https://example.com")).toBe("");
    expect(analyticsReferrer("not a URL", "https://example.com")).toBe("");
  });
});
