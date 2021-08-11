import { ADD_RUKU, ADD_VERSE, CREATE_DATA, END_LOADING, FETCH_ALL, FETCH_ALL_CHAPTER, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE_DATA, UPDATE_VERSE } from "../constant/actionTypes"

const quran = (state = { isLoading: true, chapters: []}, action) => {
    switch (action.type) {
        case FETCH_ALL:
        case FETCH_ALL_CHAPTER:
        case FETCH_BY_SEARCH:
            return { ...state, chapters: action.payload.data }
        case FETCH_DATA:
            return { ...state, chapter: action.payload }
        case CREATE_DATA:
            return { ...state, chapters: [...state.chapters, action.payload] }
        case UPDATE_DATA:
            return { ...state, chapters: state.chapters.map((chapter) => chapter._id === action.payload._id ? action.payload : chapter) }
        case ADD_RUKU:
        case ADD_VERSE:
        case UPDATE_VERSE:
            return { ...state, chapters: state.chapters.map((chapter) => {
                if (chapter._id === action.payload._id) return action.payload
                return chapter
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
