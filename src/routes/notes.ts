import {Router } from "express"
import {createOneNote, getAllNotes,deleteOneNote, getOneNote, updateOneNote} from "../controllers/notes"

const notesRouter = Router()

notesRouter.get("/", getAllNotes)
notesRouter.post("/", createOneNote)
notesRouter.get("/:id", getOneNote)
notesRouter.put("/:id", updateOneNote)
notesRouter.delete("/:id", deleteOneNote)

export default notesRouter
