import mongoose from 'mongoose'
import autoIncrement from 'mongoose-auto-increment'

const quranSchema = mongoose.Schema({
    chapter_id: { type: String, required: true },
    arabic_name: { type: String, required: true },
    latin_name: { type: String, required: true },
    literal: { type: String, required: true },
    classification: { type: String, required: true },
    aliases: { type: [String], default: [] },
    avail: { type: [String], default: [] },
    mysterious_letters: { type: [String], default: [] },
    position: { type: [Array], default: [] }
})

autoIncrement.initialize(mongoose)

quranSchema.plugin(autoIncrement.plugin, { model: 'Quran', field: 'chapter_index', startAt: 1 })

export default mongoose.model('Quran', quranSchema)
