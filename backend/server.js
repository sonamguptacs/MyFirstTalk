const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route to serve private files
app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "files/GoodPartsOfJavaScript.pdf");
    res.download(filePath, "GoodPartsOfJavaScript.pdf", (err) => {
        if (err) {
            res.status(500).send("Error downloading file");
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
