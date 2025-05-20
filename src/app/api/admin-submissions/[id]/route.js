import { createClient } from "contentful-management";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

export async function GET(req, { params }) {
  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ error: "Missing entry ID." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment("master");
    const entry = await environment.getEntry(id);
    return new Response(JSON.stringify({ item: entry }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error fetching entry:", err);
    return new Response(JSON.stringify({ error: "Failed to fetch entry." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
