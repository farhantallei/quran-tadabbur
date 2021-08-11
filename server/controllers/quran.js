import mongoose from 'mongoose'

import Quran from '../models/quran.js'

export const getData = async (req, res) => {
    try {
        const quran = await Quran.find().sort({ chapter_index: 1 })

        res.status(200).json({ data: quran })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getChapter = async (req, res) => {
    try {
        const chapters = await Quran.find({}, { _id: 0, arabic_name: 1, latin_name: 1, literal: 1, classification: 1, chapter_id: 1, chapter_index: 1 }).sort({ chapter_index: 1 })

        res.status(200).json({ data: chapters })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getDataBySearch = async (req, res) => {
    const { q, i } = req.query

    try {
        const searchTerm = new RegExp(q, 'i')

        const quran = await Quran.find({ $or: [ { arabic_name: searchTerm }, { latin_name: searchTerm }, { literal: searchTerm}, { chapter_id: searchTerm }, { chapter_index: { $in: i.split(',') } }]})

        res.json({ data: quran })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getSelectedData = async (req, res) => {
    const { id } = req.params

    try {
        const chapter = await Quran.findOne({ chapter_id: id })

        if (chapter) res.status(200).json(chapter)
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

    const chapter = await Quran.findById(id)

    chapter.position.push([])

    const updatedData = await Quran.findByIdAndUpdate(id, chapter, { new: true })

    res.json(updatedData)
}

export const addVerse = async (req, res) => {
    const { id } = req.params
    const { ruku, verse } = req.body

    const chapter = await Quran.findById(id)

    chapter.position[ruku].push({ verse })

    const updatedData = await Quran.findByIdAndUpdate(id, chapter, { new: true })

    res.json(updatedData)
}

export const updateData = async (req, res) => {
    const { id } = req.params
    const data = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data with id: ${id}`)

    const updatedData = await Quran.findByIdAndUpdate(id, { ...data, _id: id }, { new: true })

    res.json(updatedData)
}

export const updateVerse = async (req, res) => {
    const { id } = req.params
    const { ruku, verse, updatedVerse } = req.body

    const updatedData = await Quran.findByIdAndUpdate(id, { $set: { [`position.${ruku}.${verse}.verse`]: updatedVerse } }, { new: true })

    res.json(updatedData)
}
