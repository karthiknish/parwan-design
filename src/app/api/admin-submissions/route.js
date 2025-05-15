import { createClient } from "contentful-management";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

export async function GET() {
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment("master");
    const entries = await environment.getEntries({
      content_type: "parwanContact",
      order: "-sys.createdAt",
    });
    return new Response(JSON.stringify({ items: entries.items }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching admin submissions:", err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch submissions." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
