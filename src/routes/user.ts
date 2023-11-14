import { Router } from "express";
import { SignUp, LogIn, LogOut } from "../controllers/user";
import userValidation from "../validation/user";

const router = Router();

router.post("/signup", userValidation, SignUp);
router.post("/login", LogIn);
router.get("/logout", LogOut);

export default router;
