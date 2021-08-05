import * as api from '../api'

import { ADD_THEME, CREATE_DATA, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE_DATA, UPDATE_THEME } from '../constant/actionTypes'

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

export const createData = (surat) => async (dispatch) => {
    try {
        const { data } = await api.createData(surat)

        dispatch({ type: CREATE_DATA, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const addTheme = (id, theme) => async (dispatch) => {
    try {
        const { data } = await api.addTheme(id, theme)

        dispatch({ type: ADD_THEME, payload: data })

        return data.position
    } catch (error) {
        console.log(error)
    }
}

export const updateData = (id, surat) => async (dispatch) => {
    try {
        const { data } = await api.updateData(id, surat)

        dispatch({ type: UPDATE_DATA, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateTheme = (id, theme) => async (dispatch) => {
    try {
        const { data } = await api.updateTheme(id, theme)

        dispatch({ type: UPDATE_THEME, payload: data })

        return data.position
    } catch (error) {
        console.log(error)
    }
}
