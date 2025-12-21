const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

function clientFile(fileName) {
 
  return path.join(__dirname, "..", "public", "client", fileName);
}

app.get("/", (req, res) => res.sendFile(clientFile("index.html")));

app.get("/about", (req, res) => res.sendFile(clientFile("about.html")));

app.get("/feature", (req, res) => res.sendFile(clientFile("feature.html")));

app.get("/about.html", (req, res) => res.sendFile(clientFile("about.html")));

app.get("/feature.html", (req, res) => res.sendFile(clientFile("feature.html")));

app.get("/api/health", (req, res) => {
 
  res.json({ status: "ok", message: "Server is healthy" });
});

app.get("/api/sample", (req, res) => {
  res.json({
    city: "Baltimore",
    temperature: "72°F",
    airQuality: "Good"
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
