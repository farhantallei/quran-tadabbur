import express from 'express'

import { getData, getDataBySearch, createData, updateData, getSelectedData, addRuku, addVerse, updateVerse } from '../controllers/quran.js'

const router = express.Router()

router.get('/', getData)
router.get('/search', getDataBySearch)
router.get('/:id', getSelectedData)

router.post('/', createData)
router.post('/:id/ruku', addRuku)
router.post('/:id/verse', addVerse)

router.patch('/:id', updateData)
router.patch('/:id/verse', updateVerse)

export default router
