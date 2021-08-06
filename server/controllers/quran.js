import mongoose from 'mongoose'

import Quran from '../models/quran.js'

export const getData = async (req, res) => {
    try {
        const quran = await Quran.find().sort({ surah_index: 1 })

        res.status(200).json({ data: quran })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getDataBySearch = async (req, res) => {
    const { q, i } = req.query

    try {
        const searchTerm = new RegExp(q, 'i')

        const quran = await Quran.find({ $or: [ { arabic_name: searchTerm }, { latin_name: searchTerm }, { literal: searchTerm}, { surah_id: searchTerm }, { surah_index: { $in: i.split(',') } }]})

        res.json({ data: quran })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getSelectedData = async (req, res) => {
    const { id } = req.params

    try {
        const surah = await Quran.findOne({ surah_id: id })

        if (surah) res.status(200).json(surah)
        else res.status(404).json({ message: `Data ${id} not found` })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const createData = async (req, res) => {
    const data = req.body

    const newData = new Quran(data)

    try {
        await newData.save()

        res.status(201).json(newData)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}

export const addRuku = async (req, res) => {
    const { id } = req.params
    const ruku = req.body

    const surah = await Quran.findById(id)

    surah.position.push(ruku)

    const updatedData = await Quran.findByIdAndUpdate(id, surah, { new: true })

    res.json(updatedData)
}

export const addTheme = async (req, res) => {
    const { id } = req.params
    const theme = req.body

    const surah = await Quran.findById(id)
    
    surah.position.push(theme)

    const updatedTheme = await Quran.findByIdAndUpdate(id, surah, { new: true })

    res.json(updatedTheme)
}

export const updateData = async (req, res) => {
    const { id } = req.params
    const data = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data with id: ${id}`)

    const updatedData = await Quran.findByIdAndUpdate(id, { ...data, _id: id }, { new: true })

    res.json(updatedData)
}

export const updateTheme = async (req, res) => {
    const { id } = req.params
    const { i, theme } = req.body

    const updatedTheme = await Quran.findByIdAndUpdate(id, { $set: { [`position.${i}.theme`]: theme } }, { new: true })

    res.json(updatedTheme)
}
