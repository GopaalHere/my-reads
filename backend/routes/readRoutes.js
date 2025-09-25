import express from 'express';
import { addread, deleteRead, getOneRead, getreads, updateRead } from '../controllers/readController.js';
import { verfifyJWTtoken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addread', verfifyJWTtoken, addread);
router.get('/myreads', verfifyJWTtoken, getreads)
router.delete('/delete/:_id',verfifyJWTtoken, deleteRead)
router.get('/:_id',getOneRead);
router.put('/update/:id',updateRead);
export default router;