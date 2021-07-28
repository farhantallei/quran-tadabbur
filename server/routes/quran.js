import express from 'express';

import { getData, createData, updateData } from '../controllers/quran.js';

const router = express.Router();

router.get('/', getData);
router.post('/', createData);
router.patch('/:id', updateData);

export default router;
