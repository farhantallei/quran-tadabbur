import express from 'express'

import { getData, getDataBySearch, createData, updateData } from '../controllers/quran.js'

const router = express.Router()

router.get('/', getData)
router.get('/search', getDataBySearch)
router.post('/', createData)
router.patch('/:id', updateData)

export default router
