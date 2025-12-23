import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public", "client")));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

console.log("SUPABASE_URL loaded:", !!supabaseUrl);

const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "client", 
"index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "client", 
"about.html"));
});

app.get("/feature", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "client", 
"feature.html"));
});

app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "Server is healthy" });
});

app.get("/api/quotes", async (req, res) => {
  const { data, error } = await supabase
    .from("quotes")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.log("SUPABASE ERROR:", error);
    return res.status(500).json({
      error: "Failed to fetch quotes",
      details: error.message,
      hint: error.hint || null,
      code: error.code || null,
    });
  }

  res.json(data);
});

app.get("/api/outdoor", async (req, res) => {
  try {
    const city = (req.query.city || "").trim();
    if (!city) return res.status(400).json({ error: "City is required" });

    const geoUrl = 
`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
      city
    )}&count=1`;

    const geoResp = await fetch(geoUrl);
    const geoData = await geoResp.json();

    if (!geoData.results?.length) {
      return res.status(404).json({ error: "City not found" });
    }

    const { latitude, longitude, name, country } = geoData.results[0];

    const weatherUrl = 
`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`;
    const weatherResp = await fetch(weatherUrl);
    const weatherData = await weatherResp.json();

    const airUrl = 
`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi`;
    const airResp = await fetch(airUrl);
    const airData = await airResp.json();

    const tempC = weatherData.current.temperature_2m;
    const aqi = airData.current.us_aqi;

    let airLabel = "Unknown";
    if (aqi <= 50) airLabel = "Good";
    else if (aqi <= 100) airLabel = "Moderate";
    else if (aqi <= 150) airLabel = "Unhealthy for Sensitive Groups";
    else if (aqi <= 200) airLabel = "Unhealthy";
    else airLabel = "Very Unhealthy";

    res.json({
      city: `${name}, ${country}`,
      temperature_f: Math.round((tempC * 9) / 5 + 32),
      aqi,
      air_quality: airLabel,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch outdoor data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

