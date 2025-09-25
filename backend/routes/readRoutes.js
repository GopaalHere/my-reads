import express from 'express';
import { addread, deleteRead, getreads } from '../controllers/readController.js';
import { verfifyJWTtoken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addread', verfifyJWTtoken, addread);
router.get('/myreads', verfifyJWTtoken, getreads)
router.delete('/delete/:_id',verfifyJWTtoken, deleteRead)

export default router;