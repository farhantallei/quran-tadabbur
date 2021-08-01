import * as api from '../api'

import { CREATE, END_LOADING, FETCH_ALL, FETCH_BY_SEARCH, FETCH_DATA, START_LOADING, UPDATE } from '../constant/actionTypes'

export const getData = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchData()
        
        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getDataBySearch = (search) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data: { data } } = await api.fetchDataBySearch(search)

        dispatch({ type: FETCH_BY_SEARCH, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getSelectedData = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchSelectedData(id)
        
        dispatch({ type: FETCH_DATA, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const createData = (surat) => async (dispatch) => {
    try {
        const { data } = await api.createData(surat)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateData = (id, surat) => async (dispatch) => {
    try {
        const { data } = await api.updateData(id, surat)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}
