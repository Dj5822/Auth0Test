import express from "express";
import checkJwt from "../middleware/checkJwt";

const router = express.Router();

/*
A simple API endpoint that uses the checkJwt middleware 
which checks the authorization token.
*/
router.get("/", checkJwt, (req, res) => {
    res.send("hello world");
})

export default router;