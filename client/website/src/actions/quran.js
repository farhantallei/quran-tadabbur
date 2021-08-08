import * as api from '../api'

import { ADD_AYAH, ADD_RUKU, CREATE_DATA, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE_AYAH, UPDATE_DATA } from '../constant/actionTypes'

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

export const addRuku = (id) => async (dispatch) => {
    try {
        const { data } = await api.addRuku(id)

        dispatch({ type: ADD_RUKU, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const addAyah = (id, ruku, ayah) => async (dispatch) => {
    try {
        const { data } = await api.addAyah(id, ruku, ayah)

        dispatch({ type: ADD_AYAH, payload: data })
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

export const updateAyah = (id, ruku, ayah, updatedAyah) => async (dispatch) => {
    try {
        const { data } = await api.updateAyah(id, ruku, ayah, updatedAyah)

        dispatch({ type: UPDATE_AYAH, payload: data })
    } catch (error) {
        console.log(error)
    }
}
