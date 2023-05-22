const express = require('express')

const book = require('../controllers/book')

const router = express.Router()

router.get('/v1/books', book.getAll)
router.post('/v1/books', book.create)
router.get('/v1/books/:id', book.get)
router.put('/v1/books/:id', book.update)
router.delete('/v1/books/:id', book.del)

module.exports = router
