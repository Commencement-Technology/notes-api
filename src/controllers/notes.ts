import { Request, Response, NextFunction } from "express"
import Notes from "../models/notes"
import { NotesTypes } from "../types"
import { UserTypes } from "../types"

export const getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
  const notes = await Notes.find({ user: req.user!.id })
  res.status(200)
  res.json({ notes })
}

export const createOneNote = async (req: Request, res: Response, next: NextFunction) => {
  const note = await Notes.create({
    user: req.user!.id,
    title: req.body.title,
    body: req.body.body
  })
  res.status(200)
  res.json({ message: "New note saved", note })
}

export const getOneNote = async (req: Request, res: Response, next: NextFunction) => {
  const note = await Notes.findById(req.params.id)
  if(!note) {
    res.status(400)
    res.json({message: "Note not found"})
    return
  }
  if (note!.user.toString() === req.user!.id) {
    res.status(200)
    res.json({ note })
    return
  }
  res.status(403)
  res.json({ message: "You don't have permission to view this note" })
}

export const updateOneNote = async (req: Request, res: Response, next: NextFunction) => {
  const note = await Notes.findById(req.params.id)
  if (!note) {
    res.status(400)
    res.send("note not found")
    return
  }
  if (note!.user.toString() === req.user!.id) {
    note.title = req.body.title
    note.body = req.body.body

    const updatedNote = await note.save()

    console.log(updatedNote)
    res.status(200)
    res.json({ updatedNote })
    return
  }
  res.json({ message: "You don't have permission" })
}

export const deleteOneNote = async (req: Request, res: Response, next: NextFunction) => {
  const note = await Notes.findById(req.params.id);
  if (!note) {
    res.status(400)
    res.send("Note not found")
    return
  }

  if (note!.user.toString() === req.user!.id) {
    console.log("run")
    await Notes.deleteOne({_id: note._id})
    console.log("run")
    res.json({ message: "Note deleted successfully!" });
    return
  }
  res.json({message: "You don't have permission"})

}
