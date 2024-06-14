import { Router } from "express";

const router = Router();

import { testPublication } from "../controller/publicationController.js";

router.get("/test-publication", testPublication);

export default router;
