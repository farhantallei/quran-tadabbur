import { CREATE, FETCH_ALL, UPDATE } from "../constant/actionTypes"

const quran = (quran = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...quran, action.payload]
        case UPDATE:
            return [quran.map((surah) => surah._id === action.payload._id ? action.payload : surah)]
        default:
            return quran
    }
}

export default quran
