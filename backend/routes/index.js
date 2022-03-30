import express from "express";

const router = express.Router();

import test from './test'
router.use('/test', test);

export default router;