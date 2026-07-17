const express = require('express');
const {
  addBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getSingleBook,
} = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const adminMiddleware = require('../middleware/adminMiddleware');

const router = express.Router();

router.get('/',authMiddleware, getAllBooks);
router.get('/:id', authMiddleware,getSingleBook);

router.post('/', authMiddleware, adminMiddleware, addBook);
router.put('/:id', authMiddleware, adminMiddleware, updateBook);
router.delete('/:id', authMiddleware, adminMiddleware, deleteBook);

module.exports = router;
