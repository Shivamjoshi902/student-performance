const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

// In-memory data source
const reportData = {
  studentName: "Demo Student",
  overallScore: 5,
  skills: {
    pronunciation: 7,
    fluency: 6,
    vocabulary: 7,
    grammar: 6
  }
};

// Single API endpoint
app.get("/api/report", (req, res) => {
  res.json(reportData);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
