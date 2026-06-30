/**
 * Emails a new website enquiry to the business inbox using Web3Forms.
 *
 * Setup (one step, no Gmail App Password / 2FA needed):
 *   1. Go to https://web3forms.com, enter chanukajeewantha00@gmail.com,
 *      and copy the free Access Key sent to that inbox.
 *   2. Put the key in WEB3FORMS_ACCESS_KEY below (or the env var of the same name).
 *
 * The enquiry is always saved to the database regardless; if the key is empty
 * this just skips silently so the contact form still works.
 */

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY?.trim() || "765378bb-9111-4bd6-88a9-0850d94e8ff8";

type EnquiryInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function sendEnquiryNotification(input: EnquiryInput): Promise<void> {
  if (!WEB3FORMS_ACCESS_KEY) return;

  await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New enquiry - ${input.subject}`,
      from_name: "Chanuka Jeewantha Website",
      name: input.name,
      email: input.email,
      replyto: input.email,
      message: input.message,
    }),
  });
}
