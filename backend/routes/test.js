import express from "express";
import checkJwt from "../middleware/checkJwt";

const router = express.Router();

// For testing
router.get("/", checkJwt, (req, res) => {
    res.send("hello world");
})

export default router;