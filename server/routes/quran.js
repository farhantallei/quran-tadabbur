import express from 'express'

import { getData, getDataBySearch, createData, updateData, getSelectedData, addRuku, addAyah, updateAyah } from '../controllers/quran.js'

const router = express.Router()

router.get('/', getData)
router.get('/search', getDataBySearch)
router.get('/:id', getSelectedData)

router.post('/', createData)
router.post('/:id/ruku', addRuku)
router.post('/:id/ayah', addAyah)

router.patch('/:id', updateData)
router.patch('/:id/ayah', updateAyah)

export default router
