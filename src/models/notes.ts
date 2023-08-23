import mongoose from "mongoose"
import {NotesTypes} from "../types"


const notesSchema = new mongoose.Schema<NotesTypes>({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  title: {
    type: String,
  },
  body: {
    type: String
  }
},
  {timestamps: true},
)

const Notes = mongoose.model<NotesTypes>("Notes", notesSchema)

export default Notes
