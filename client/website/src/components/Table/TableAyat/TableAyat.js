import React from 'react'
import { useDispatch } from 'react-redux'

import { addRuku } from '../../../actions/quran'
import Ayah from './Ayah/Ayah'

const TableAyat = ({ isLoading, surah, ruku, setRuku, setRukuIndex, setAyahIndex, currentAyahIndex }) => {
    const dispatch = useDispatch()
    
    const handleRuku = async () => {
        if (!isLoading && surah) {
            dispatch(addRuku(surah._id))
            setRuku([...ruku, []])
        }
    }

    const handleAyah = async (i) => {
        setRukuIndex(i)
        setAyahIndex(null)
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
                                    <Ayah key={ayahIndex} currentAyahIndex={currentAyahIndex} ayahData={ayahData} rukuIndex={rukuIndex} ayahIndex={ayahIndex} setRukuIndex={setRukuIndex} setAyahIndex={setAyahIndex} />
                                ))}
                                <button onClick={() => handleAyah(rukuIndex)}>Add AYAH</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={handleRuku}>{isLoading ? 'Tunggu' : !surah ? 'Error' : 'Add RUKU'}</button>
        </div>
    )
}

export default TableAyat
