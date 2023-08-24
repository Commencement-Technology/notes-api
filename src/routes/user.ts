import { Router } from "express";
import { SignUp, LogIn } from "../controllers/user";

const router = Router();

router.post("/signup", SignUp);
router.post("/login", LogIn);

export default router;
