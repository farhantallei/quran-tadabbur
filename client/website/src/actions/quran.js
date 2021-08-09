import * as api from '../api'

import { ADD_RUKU, ADD_VERSE, CREATE_DATA, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE_DATA, UPDATE_VERSE } from '../constant/actionTypes'

export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchData()
        
        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
        dispatch({ type: END_LOADING })
    }
}

export const getDataBySearch = (search) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchDataBySearch(search)

        dispatch({ type: FETCH_BY_SEARCH, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
        dispatch({ type: END_LOADING })
    }
}

export const getSelectedData = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchSelectedData(id)
        
        dispatch({ type: FETCH_DATA, payload: data })
        dispatch({ type: END_LOADING })

        return data.surah_index
    } catch (error) {
        console.log(error)
        dispatch({ type: END_LOADING })
    }
}

export const createData = (chapters) => async (dispatch) => {
    try {
        const { data } = await api.createData(chapters)

        dispatch({ type: CREATE_DATA, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const addRuku = (id) => async (dispatch) => {
    try {
        const { data } = await api.addRuku(id)

        dispatch({ type: ADD_RUKU, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const addVerse = (id, ruku, verse) => async (dispatch) => {
    try {
        const { data } = await api.addVerse(id, ruku, verse)

        dispatch({ type: ADD_VERSE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateData = (id, chapters) => async (dispatch) => {
    try {
        const { data } = await api.updateData(id, chapters)

        dispatch({ type: UPDATE_DATA, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateVerse = (id, ruku, verse, updatedVerse) => async (dispatch) => {
    try {
        const { data } = await api.updateVerse(id, ruku, verse, updatedVerse)

        dispatch({ type: UPDATE_VERSE, payload: data })
    } catch (error) {
        console.log(error)
    }
}
