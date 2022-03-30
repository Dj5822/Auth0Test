import express from "express";

const router = express.Router();

// For testing
router.get("/", (req, res) => {
    res.send("hello world")
})

export default router;