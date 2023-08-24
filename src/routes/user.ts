import { Router } from "express";
import { SignUp, LogIn } from "../controllers/user";
import userValidation from "../validation/user";

const router = Router();

router.post("/signup", userValidation, SignUp);
router.post("/login", LogIn);

export default router;
