import { createClient } from "contentful-management";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, message } = data;

    // Validate required fields (phone is optional unless specifically made required)
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Required fields are missing" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Validate phone format if phone is provided
    if (phone && phone.trim() !== "") {
      const phoneRegex =
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
      if (!phoneRegex.test(phone)) {
        return new Response(
          JSON.stringify({ error: "Invalid phone number format" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Prepare fields for Contentful, including phone if it exists
    const contentfulFields = {
      name: { "en-US": name },
      email: { "en-US": email },
      message: { "en-US": message },
      phone: { "en-US": phone || "" },
    };

    // Get space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment("master");

    // Create entry
    await environment.createEntry("parwanContact", {
      fields: contentfulFields,
    });

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    let errorMessage = "Failed to submit form. Please try again.";
    if (error.name && error.message) {
      console.error("Contentful Error Details:", JSON.stringify(error));
    }
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
 