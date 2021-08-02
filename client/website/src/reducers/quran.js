import { CREATE, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE } from "../constant/actionTypes"

const quran = (state = { isLoading: true, surat: []}, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return { ...state, surat: action.payload.data }
        case FETCH_BY_SEARCH:
            return { ...state, surat: action.payload }
        case FETCH_DATA:
            return { ...state, surah: action.payload }
        case CREATE:
            return { ...state, surat: [...state.surat, action.payload] }
        case UPDATE:
            return { ...state, surat: state.surat.map((surah) => surah._id === action.payload._id ? action.payload : surah) }
        case START_LOADING:
            return { ...state, isLoading: true }
        case END_LOADING:
            return { ...state, isLoading: false }
        default:
            return state
    }
}

export default quran
