import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import quranRoutes from './routes/quran.js'

const app = express()

app.use(express.json({ limit: '30mb' }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

app.use('/quran', quranRoutes)

app.get('/', (req, res) => {
    res.send('Quran Tadabbur data API')
})

const CONNECTION_URL = 'mongodb+srv://farhantallei:419555444Sifrhn@mqcluster0.uhrek.mongodb.net/MQDatabase?retryWrites=true&w=majority'
const PORT = 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`))

mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)
