import express from 'express';
import { addread, getreads } from '../controllers/readController.js';
import { verfifyJWTtoken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addread', verfifyJWTtoken, addread);
router.get('/myreads', verfifyJWTtoken, getreads)
export default router;