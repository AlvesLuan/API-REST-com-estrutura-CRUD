import express from "express";
import {createBook, getBooks, getBook, deleteBook, updateBook} from "../controllers/books.js";

const router = express.Router();

router.get('/', getBooks);
router.post('/', createBook );
router.get('/:id', getBook);
router.delete('/', deleteBook);
router.put('/:id', updateBook);

export default router;