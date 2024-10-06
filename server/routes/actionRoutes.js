import express from "express"
import actionController from "../controllers/actionController.js"

const router = express.Router();

router.post("/action", actionController.createAction);

export default router;
