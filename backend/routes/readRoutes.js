import express from 'express';
import { addread } from '../controllers/readController.js';
import { verfifyJWTtoken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/addread',verfifyJWTtoken, addread);

export default router;