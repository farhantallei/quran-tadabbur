import { CREATE, FETCH_ALL } from "../constant/actionTypes"

export default (quran = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...quran, action.payload]
        default:
            return quran
    }
}
