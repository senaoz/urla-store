var Airtable = require("airtable");

Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
});

const base = Airtable.base(process.env.AIRTABLE_BASE);

async function loadProducts() {
  const table = base("Products");
  const data = await table.select({ view: "All" }).all();
  return data;
}

export { loadProducts };
