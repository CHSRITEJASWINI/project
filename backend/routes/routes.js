import express from 'express';
import Note from '../models/Note.js';

const router = express.Router();

// GET all notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST a new note
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({ title, content });
  await newNote.save();
  res.status(201).json(newNote);
});

// DELETE a note
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: 'Note deleted' });
});

export default router;
