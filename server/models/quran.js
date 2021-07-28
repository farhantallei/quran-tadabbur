import mongoose from 'mongoose';

const quranSchema = mongoose.Schema({
    arabic_name: { type: String, required: true },
    latin_name: { type: String, required: true },
    literal: { type: String, required: true },
    aliases: { type: [String], default: [] },
    classification: { type: String, required: true },
    mysterious_letters: { type: Boolean, default: false },
    avail: { type: [String], default: [] }
});

export default mongoose.model('Quran', quranSchema);
