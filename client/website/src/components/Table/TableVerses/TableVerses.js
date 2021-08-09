import React from 'react'
import { useDispatch } from 'react-redux'

import { addRuku } from '../../../actions/quran'
import Verse from './Verse/Verse'

const TableVerses = ({ isLoading, surah, ruku, setRuku, setRukuIndex, setVerseIndex, currentVerseIndex }) => {
    const dispatch = useDispatch()
    
    const handleRuku = async () => {
        if (!isLoading && surah) {
            dispatch(addRuku(surah._id))
            setRuku([...ruku, []])
        }
    }

    const handleVerse = async (i) => {
        setRukuIndex(i)
        setVerseIndex(null)
    }

    return (
        <div className="table">
            <div className="table-head">
                <input className='search' name='search' type='text' />
            </div>
            <div className="table-layout">
                <div className="table-scroll">
                    <div className="table-container">
                        {isLoading ? 'Tunggu' : !surah ? 'Error' : !ruku.length ? 'No data' : ruku.map((verses, rukuIndex) => (
                            <div key={rukuIndex} className="ruku-list">
                                {verses.map((verseData, verseIndex) => (
                                    <Verse key={verseIndex} currentVerseIndex={currentVerseIndex} verseData={verseData} rukuIndex={rukuIndex} verseIndex={verseIndex} setRukuIndex={setRukuIndex} setVerseIndex={setVerseIndex} />
                                ))}
                                <button onClick={() => handleVerse(rukuIndex)}>Tambah Ayat</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={handleRuku}>{isLoading ? 'Tunggu' : !surah ? 'Error' : 'Tambah Rukuʻ'}</button>
        </div>
    )
}

export default TableVerses