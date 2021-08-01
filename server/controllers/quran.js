import mongoose from 'mongoose'

import Quran from '../models/quran.js'

export const getData = async (req, res) => {
    try {
        const quran = await Quran.find()

        res.status(200).json({ data: quran })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getDataBySearch = async (req, res) => {
    const { q } = req.query

    try {
        const searchTerm = new RegExp(q, 'i')

        const quran = await Quran.find({ $or: [ { arabic_name: searchTerm }, { latin_name: searchTerm }, { literal: searchTerm}, { surah_id: searchTerm }]})
        
        res.json({ data: quran })
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

export const updateData = async (req, res) => {
    const { id } = req.params
    const data = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data with id: ${id}`)

    const updatedData = await Quran.findByIdAndUpdate(id, { ...data, _id: id }, { new: true })

    res.json(updatedData)
}
