import express from "express";
const router = express.Router();

import {getblog, createblog} from "../controller/blog.js";


router.post("/create",createblog);
router.get("/get/:activecategory", getblog);

export default router;