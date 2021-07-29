import * as api from '../api'

import { CREATE, FETCH_ALL, UPDATE } from '../constant/actionTypes'

export const getData = () => async (dispatch) => {
    try {
        const { data } = await api.fetchData()

        dispatch({ type: FETCH_ALL, payload: data })
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