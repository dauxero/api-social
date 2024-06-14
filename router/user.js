import { Router } from "express";

const router = Router();

import { testUser } from "../controller/userController.js";

router.get("/test-user", testUser);

export default router;
