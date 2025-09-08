// pages/api/packages.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://api.fetchtrue.com/api/packages");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assurance data" });
  }
}
