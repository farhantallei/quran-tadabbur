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
