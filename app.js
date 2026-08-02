const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000; // Updated to respect Render's PORT variable

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/products", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "products.html"));
});

app.get("/gallery", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "gallery.html"));
});

app.get("/certifications", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "certifications.html"));
});

app.get("/faq", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "faq.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

// Import enquiry route
const enquiryRoute = require("./routes/enquiry");

// --- MOUNT AT /enquiry INSTEAD OF / ---
app.use("/enquiry", enquiryRoute);

app.listen(PORT, () => {
    console.log(`Server Running : http://localhost:${PORT}`);
});