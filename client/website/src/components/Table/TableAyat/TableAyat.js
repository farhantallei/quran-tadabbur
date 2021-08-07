import React from 'react'
import { useDispatch } from 'react-redux'

import { addRuku } from '../../../actions/quran'
import Ayah from './Ayah/Ayah'

const TableAyat = ({ isLoading, surah, ruku, setRuku, setRukuIndex }) => {
    const dispatch = useDispatch()
    let count = 0
    
    const handleRuku = async () => {
        if (!isLoading && surah) {
            dispatch(addRuku(surah._id))
            setRuku([...ruku, []])
        }
    }

    const handleAyah = async (i) => {
        if (!isLoading && surah) {
            setRukuIndex(i)
        }
    }

    return (
        <div className="table">
            <div className="table-head">
                <input className='search' name='search' type='text' value='' onKeyDown={() => {}} onChange={() => {}} />
            </div>
            <div className="table-layout">
                <div className="table-scroll">
                    <div className="table-container">
                        {isLoading ? 'Tunggu' : !surah ? 'Error' : !ruku.length ? 'No data' : ruku.map((ayat, rukuIndex) => (
                            <div key={rukuIndex} className="ruku-list">
                                {ayat.map((ayahData, ayahIndex) => (
                                    <Ayah key={ayahIndex} count={++count} ayahData={ayahData} />
                                ))}
                                <button onClick={() => handleAyah(rukuIndex)}>Add AYAH</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={handleRuku}>Add RUKU</button>
        </div>
    )
}

export default TableAyat
