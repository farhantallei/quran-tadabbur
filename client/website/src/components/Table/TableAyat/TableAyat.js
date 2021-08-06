import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addRuku } from '../../../actions/quran'

const TableAyat = ({ ruku, setRuku }) => {
    const dispatch = useDispatch()
    const { surah, isLoading } = useSelector((state) => state.quran)
    const rukuInput = { text: [], tafsir: [] }
    
    const handleRuku = async () => {
        if (!isLoading && surah) {
            dispatch(addRuku(surah._id, rukuInput))
            setRuku([...ruku, [rukuInput]])
        }
    }

    return (
        <div className="table">
            <div className="table-head">
                <input className='search' name='search' type='text' value='' onKeyDown={() => {}} onChange={() => {}} />
            </div>
            <div className="table-layout">
                {isLoading ? 'Tunggu' : !surah ? 'Error' : !ruku?.length ? 'No data' : ruku.map((ayat, index) => (
                <div key={index} style={{ userSelect: 'none' }}>
                    <p>Ruku: {index+1}</p>
                    {ayat.map((ayah, index) => (
                    <div key={index}>
                        <p>Ayat: {index+1}</p>
                        <p>{ayah.text}</p>
                        <p>{ayah.tafsir}</p>
                    </div>))}
                    <button onClick={() => {}}>Add AYAH</button>
                </div>))}
            </div>
            <button onClick={handleRuku}>Add RUKU</button>
        </div>
    )
}

export default TableAyat
