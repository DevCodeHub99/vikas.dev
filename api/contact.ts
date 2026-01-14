// Vercel Serverless Function for Contact Form
// Deploy to Vercel and set RESEND_API_KEY in environment variables

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_EMAIL || "your-email@example.com";

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: Request): Promise<Response> {
  // Only allow POST
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Check API key
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return new Response(JSON.stringify({ message: "Email service not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const { name, email, message } = (await req.json()) as ContactBody;

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (name.length < 2) {
      return new Response(JSON.stringify({ message: "Name must be at least 2 characters" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (message.length < 10) {
      return new Response(JSON.stringify({ message: "Message must be at least 10 characters" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ message: "Invalid email address" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: TO_EMAIL,
        reply_to: email,
        subject: `Portfolio Contact: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        `,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ message: "Failed to send email" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export const config = {
  runtime: "edge",
};
