import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface SendEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: SendEmailParams) {
  const toEmail = process.env.CONTACT_EMAIL || "hello@roy.dev";

  const { data, error } = await getResend().emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: [toEmail],
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
