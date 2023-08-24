import { Request, Response } from "express";
import Notes from "../models/notes";
import asyncHandler from "../middleware/asyncHandler";
import { validationResult } from "express-validator";

export const getAllNotes = asyncHandler(async (req: Request, res: Response) => {
  const notes = await Notes.find({ user: req.user!.id });
  if (!notes) {
    res.status(404);
    res.json({ message: "You have no notes" });
  }
  res.status(200);
  res.json({ notes });
});

export const createOneNote = asyncHandler(
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400);
      res.json({ success: false, errors: errors.array() });
      return;
    }

    const note = await Notes.create({
      user: req.user!.id,
      title: req.body.title,
      body: req.body.body,
    });
    res.status(201);
    res.json({ message: "New note saved", note });
  },
);

export const getOneNote = asyncHandler(async (req: Request, res: Response) => {
  const note = await Notes.findById(req.params.id);
  if (!note) {
    res.status(404);
    res.json({ message: "Note not found" });
    return;
  }
  if (note.user.toString() === req.user!.id) {
    res.status(200);
    res.json({ note });
    return;
  }
  res.status(401);
  res.json({ message: "You don't have permission to view this note" });
});

export const updateOneNote = asyncHandler(
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400);
      res.json({ success: false, errors: errors.array() });
      return;
    }
    const note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404);
      res.send("Note not found");
      return;
    }
    if (note!.user.toString() === req.user!.id) {
      note.title = req.body.title;
      note.body = req.body.body;

      const updatedNote = await note.save();

      res.status(202);
      res.json({ updatedNote });
      return;
    }
    res.status(401);
    res.json({ message: "You don't have permission" });
  },
);

export const deleteOneNote = asyncHandler(
  async (req: Request, res: Response) => {
    const note = await Notes.findById(req.params.id);
    if (!note) {
      res.status(404);
      res.send("Note not found");
      return;
    }

    if (note!.user.toString() === req.user!.id) {
      await Notes.deleteOne({ _id: note._id });
      res.json(200);
      res.json({ message: "Note deleted successfully!" });
      return;
    }
    res.status(401);
    res.json({ message: "You don't have permission" });
  },
);
