import express from 'express';
import { addread, deleteRead, getAnalytics, getOneRead, getreads, updateRead } from '../controllers/readController.js';
import { verfifyJWTtoken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addread', verfifyJWTtoken, addread);
router.get('/myreads', verfifyJWTtoken, getreads)
router.delete('/delete/:_id',verfifyJWTtoken, deleteRead)
router.put('/update/:id',verfifyJWTtoken,updateRead);
router.get('/analytics',verfifyJWTtoken,getAnalytics);
router.get('/:_id',verfifyJWTtoken,getOneRead);
export default router;