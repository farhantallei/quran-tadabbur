import express from 'express'

import { getData, getDataBySearch, createData, updateData, getSelectedData, addTheme, updateTheme } from '../controllers/quran.js'

const router = express.Router()

router.get('/', getData)
router.get('/search', getDataBySearch)
router.get('/:id', getSelectedData)

router.post('/', createData)
router.post('/:id/theme', addTheme)

router.patch('/:id', updateData)
router.patch('/:id/theme', updateTheme)

export default router
