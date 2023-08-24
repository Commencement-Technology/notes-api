import { Router } from "express";
import {
  createOneNote,
  getAllNotes,
  deleteOneNote,
  getOneNote,
  updateOneNote,
} from "../controllers/notes";
import notesValidation from "../validation/notes";

const notesRouter = Router();

notesRouter.get("/", getAllNotes);
notesRouter.post("/", notesValidation, createOneNote);
notesRouter.get("/:id", getOneNote);
notesRouter.put("/:id", notesValidation, updateOneNote);
notesRouter.delete("/:id", deleteOneNote);

export default notesRouter;
