const url = "https://v2.api.noroff.dev/online-shop";
const API_KEY = import.meta.env.VITE_API_KEY;

// Henter produkter fra API
export async function getProducts() {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const json = await response.json();

  return json.data;
}
