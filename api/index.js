import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public", "client")));

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "client", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "client", "about.html"));
});

app.get("/feature", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "client", "feature.html"));
});

app.get("/api/quotes", async (req, res) => {
  const { data, error } = await supabase.from("quotes").select("*");
  if (error) return res.status(500).json({ error });
  res.json(data);
});

export default app;

