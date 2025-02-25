import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();

// Route for save a new Book
router.post('/', async (req, res) => {
    try{
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            })
        }
    const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);

    return res.status(201).send(book);
    }catch(error){
        // console.log(error.message)
        res.status(500).send({message: error.message});
    }
})

// Route for fetch All book
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        // console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// Route for fetch single book
router.get('/:id', async (req, res) => {
    try {
        const books = await Book.findById(req.params.id);
        return res.status(200).json({
            count: books.length,
            data: books
        });
    } catch (error) {
        // console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

// Route for update a book
router.put('/:id', async (req, res) => {
    try{
        if (
            !req.body.title ||
            !req.body.author ||
            !req.body.publishYear
        ) {
            return res.status(400).send({
                message: 'Send all required fields: title, author, publishYear',
            })
        }
        const {id} = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if(!result){
            return res.status(404).json({message: 'Book not found'});
        }
        return res.status(200).send({message: 'Book updated successfully'});
    }
    catch(error) {
        // console.log(error.message);
        res.status(500).send({message: error.message})
    }
})

// Route for delete a book
router.delete('/:id', async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete(req.params.id);
        if(!result){
            return res.status(404).json({message: 'Book not found'});
        }
        return res.status(200).send({message: 'Book deleted successfully'}); 
        
    } catch (error) {
        // console.log(error.message);
        res.status(500).send({message: error.message});
    }
})

export default router;