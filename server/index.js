const express = require("express");
const path = require("path");

const app= express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => { res.sendFile( path.join(__dirname, "..","public","client","index.html")
  );
                        });
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "client", "about.html"));
});

app.get("/feature", (req,res) => { 
  res.sendFile (
  path.join(__dirname, "..", "public","client","feature.html")
);
 });



app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Server is healthy"
  });
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
