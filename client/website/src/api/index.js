import axios from 'axios'

const url = 'http://localhost:5000/quran'

export const fetchData = () => axios.get(url)
export const fetchDataBySearch = (search) => axios.get(`${url}/search?q=${search.search || 'none'}&i=${search.index}`)
export const fetchSelectedData = (id) => axios.get(`${url}/${id}`)

export const createData = (newData) => axios.post(url, newData)
export const addRuku = (id) => axios.post(`${url}/${id}/ruku`)
export const addAyah = (id, ruku, ayah) => axios.post(`${url}/${id}/ayah`, { ruku, ayah })
export const addTheme = (id, theme) => axios.post(`${url}/${id}/theme`, { theme })

export const updateData = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData)
export const updateAyah = (id, ruku, ayah, updatedAyah) => axios.patch(`${url}/${id}/ayah`, { ruku, ayah, updatedAyah })
export const updateTheme = (id, theme) => axios.patch(`${url}/${id}/theme`, theme)
