import mongoose from 'mongoose';

import Quran from '../models/quran.js';

export const getData = async (req, res) => {
    try {
        const quranData = await Quran.find();

        res.status(200).json(quranData);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createData = async (req, res) => {
    const data = req.body;

    const newData = new Quran(data);

    try {
        await newData.save();

        res.status(201).json(newData);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};

export const updateData = async (req, res) => {
    const { id: _id } = req.params;
    const data = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No data with that id');

    const updatedData = await Quran.findByIdAndUpdate(_id, { ...data, _id }, { new: true });

    res.json(updatedData);
};
