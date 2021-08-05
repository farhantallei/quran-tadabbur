import { ADD_RUKU, ADD_THEME, CREATE_DATA, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE_DATA, UPDATE_THEME } from "../constant/actionTypes"

const quran = (state = { isLoading: true, surat: []}, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, surat: action.payload.data }
        case FETCH_BY_SEARCH:
            return { ...state, surat: action.payload.data }
        case FETCH_DATA:
            return { ...state, surah: action.payload }
        case CREATE_DATA:
            return { ...state, surat: [...state.surat, action.payload] }
        case ADD_RUKU:
            return { ...state, surat: state.surat.map((surah) => {
                if (surah._id === action.payload._id) return action.payload
                return surah
            })}
        case ADD_THEME:
            return { ...state, surat: state.surat.map((surah) => {
                if (surah._id === action.payload._id) return action.payload
                return surah
            })}
        case UPDATE_DATA:
            return { ...state, surat: state.surat.map((surah) => surah._id === action.payload._id ? action.payload : surah) }
        case UPDATE_THEME:
            return { ...state, surat: state.surat.map((surah) => {
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
