import express from 'express'

import { getData, getDataBySearch, createData, updateData, getSelectedData, addTheme, updateTheme, addRuku, addAyah } from '../controllers/quran.js'

const router = express.Router()

router.get('/', getData)
router.get('/search', getDataBySearch)
router.get('/:id', getSelectedData)

router.post('/', createData)
router.post('/:id/ruku', addRuku)
router.post('/:id/ayah', addAyah)
router.post('/:id/theme', addTheme)

router.patch('/:id', updateData)
router.patch('/:id/theme', updateTheme)

export default router
