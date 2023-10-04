// routes.js
const express = require("express");
const router = express.Router();
const db = require("./db"); // Import your database connection

router.get("/get-data", (req, res) => {
  db.query("SELECT * FROM your_table_name", (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

module.exports = router;
