import mongoose from 'mongoose'

const suratSchema = mongoose.Schema({
    position: [{
        theme: { type: String },
        ruku: [[{
            subject: { type: String },
            ayat: [{
                text: [{
                    arabic: { type: String },
                    latin: { type: String },
                    translation: { type: String },
                }],
                tafsir: [{
                    name: { type: String },
                    text: { type: String },
                }]
            }],
        }]],
    }]
})

export default mongoose.model('Quran', suratSchema)
