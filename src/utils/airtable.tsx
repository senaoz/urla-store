var Airtable = require("airtable");

Airtable.configure({
  apiKey:
    "patXuhMAA8wbAkx9r.ca42d3038d882e6b729792708bd92862250f86ad47f81cfc968ede04161544fc",
});

const base = Airtable.base("appQsFdWaHkxdO52p");

async function loadProducts() {
  const table = base("Products");
  const data = await table.select({ view: "All" }).all();
  return data;
}

export { loadProducts };
