import axios from 'axios'

const url = 'http://localhost:5000/quran'

export const fetchData = () => axios.get(url)
export const createData = (newData) => axios.post(url, newData)
export const updateData = (id, updatedData) => axios.patch(`${url}/${id}`, updatedData)