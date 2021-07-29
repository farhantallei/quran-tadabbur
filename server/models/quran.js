import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const quranSchema = mongoose.Schema({
    arabic_name: { type: String, required: true },
    latin_name: { type: String, required: true },
    literal: { type: String, required: true },
    aliases: { type: [String], default: [] },
    classification: { type: String, required: true },
    mysterious_letters: { type: Boolean, default: false },
    avail: { type: [String], default: [] }
})

autoIncrement.initialize(mongoose)

quranSchema.plugin(autoIncrement.plugin, { model: 'Quran', field: 'surah_id', startAt: 1 })

export default mongoose.model('Quran', quranSchema)
