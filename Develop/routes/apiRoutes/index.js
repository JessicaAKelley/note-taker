const router = require("express").Router();
const notes = require("../../db/db.json");
var uniqid = require("uniqid");

router.get("/notes", (req, res) => {
    res.json(notes);
});

router.post("/notes", (req, res) => {
    req.body.id = uniqid();
    notes.push(req.body);
    res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
    const { id } = req.params;
    const projectIndex = notes.findIndex((p) => p.id == id);
    notes.splice(projectIndex, 1);
    res.json(notes);
});

module.exports = router;
