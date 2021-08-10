import axios from 'axios'

const url = 'https://quran-tadabbur.herokuapp.com/quran'

export const fetchData = () => axios.get(url)
export const fetchDataBySearch = (search) => axios.get(`${url}/search?q=${search.search || 'none'}&i=${search.index}`)
export const fetchSelectedData = (id) => axios.get(`${url}/${id}`)

export const createData = (newData) => axios.post(url, newData)
export const addRuku = (id) => axios.post(`${url}/${id}/ruku`)
export const addVerse = (id, ruku, verse) => axios.post(`${url}/${id}/verse`, { ruku, verse })

export const updateData = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData)
export const updateVerse = (id, ruku, verse, updatedVerse) => axios.patch(`${url}/${id}/verse`, { ruku, verse, updatedVerse })
