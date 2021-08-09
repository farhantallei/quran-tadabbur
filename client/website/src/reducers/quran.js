import { ADD_RUKU, ADD_VERSE, CREATE_DATA, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE_DATA, UPDATE_VERSE } from "../constant/actionTypes"

const quran = (state = { isLoading: true, chapters: []}, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, chapters: action.payload.data }
        case FETCH_BY_SEARCH:
            return { ...state, chapters: action.payload.data }
        case FETCH_DATA:
            return { ...state, surah: action.payload }
        case CREATE_DATA:
            return { ...state, chapters: [...state.chapters, action.payload] }
        case UPDATE_DATA:
            return { ...state, chapters: state.chapters.map((surah) => surah._id === action.payload._id ? action.payload : surah) }
        case ADD_RUKU:
        case ADD_VERSE:
        case UPDATE_VERSE:
            return { ...state, chapters: state.chapters.map((surah) => {
                if (surah._id === action.payload._id) return action.payload
                return surah
            })}
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        default:
            return state
    }
}

export default quran
