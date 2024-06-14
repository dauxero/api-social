import { Router } from "express";

const router = Router();

import { testFollow } from "../controller/followController.js";

router.get("/test-follow", testFollow);

export default router;
