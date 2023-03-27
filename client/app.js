const API_URL = "http://localhost:3000";

export async function fetchData() {
  const response = await fetch(`${API_URL}/`);
  const data = await response.json();
  return data;
}