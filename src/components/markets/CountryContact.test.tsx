import { afterEach, describe, expect, it, vi } from "vitest";
import React from "react";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

function renderCountryForm() {
  return render(<ContactForm defaultTargetCountry="United Kingdom" defaultDialCode="+44" defaultService="Executive Brand Suite" serviceChoices={["International Career Pack", "Executive Brand Suite"]} marketContext={{ name: "United Kingdom", currency: "GBP", path: "/en-uk/contact" }} />);
}

describe("country enquiry workflow", () => {
  it("preselects the package, target and dial code and preserves them on submission failure", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: false, json: async () => ({ message: "Please try again." }) });
    vi.stubGlobal("fetch", fetchMock);
    renderCountryForm();
    expect(screen.getByLabelText("Target Market")).toHaveValue("United Kingdom");
    expect(screen.getByLabelText("Country code (type to search)")).toHaveValue("+44");
    expect(screen.getByLabelText("Selected Service or Package")).toHaveValue("Executive Brand Suite");
    fireEvent.change(screen.getByLabelText("Full Name *"), { target: { value: "Test Applicant" } });
    fireEvent.change(screen.getByLabelText("Email Address *"), { target: { value: "applicant@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Submit International Enquiry" }));
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const payload = fetchMock.mock.calls[0][1].body as FormData;
    expect(payload.get("message")).toContain("Country Website: United Kingdom");
    expect(payload.get("message")).toContain("Pricing Currency: GBP");
    expect(payload.get("message")).toContain("Selected Service / Package: Executive Brand Suite");
    expect(payload.get("message")).toContain("Enquiry Page: /en-uk/contact");
    await waitFor(() => expect(screen.getByRole("button", { name: "Submit International Enquiry" })).not.toBeDisabled());
    expect(screen.getByLabelText("Full Name *")).toHaveValue("Test Applicant");
    expect(screen.getByLabelText("Target Market")).toHaveValue("United Kingdom");
  });

  it("keeps the existing global form defaults", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText("Target Market")).toHaveValue("");
    expect(screen.getByLabelText("Selected Service or Package")).toHaveValue("International Career Pack");
    expect(screen.getByRole("button", { name: "Submit International Enquiry" })).toBeInTheDocument();
  });
});
