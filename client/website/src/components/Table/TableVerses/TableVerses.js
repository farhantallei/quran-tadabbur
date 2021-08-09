import React from 'react'
import { useDispatch } from 'react-redux'

import { addRuku } from '../../../actions/quran'
import Verse from './Verse/Verse'

const TableVerses = ({ isLoading, chapter, setVerseInput, ruku, setRuku, setRukuIndex, setVerseIndex, currentVerseIndex }) => {
    const dispatch = useDispatch()
    
    const handleRuku = async () => {
        if (!isLoading && chapter) {
            dispatch(addRuku(chapter._id))
            setRuku([...ruku, []])
        }
    }

    const handleVerse = async (i) => {
        setRukuIndex(i)
        setVerseIndex(null)
        setVerseInput({ arabic: '', latin: '', translation: '' })
    }

    return (
        <div className="table">
            <div className="table-head">
                <input className='search' name='search' type='text' />
            </div>
            <div className="table-layout">
                <div className="table-scroll">
                    <div className="table-container">
                        {isLoading ? 'Tunggu' : !chapter ? 'Error' : !ruku.length ? 'No data' : ruku.map((verses, rukuIndex) => (
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
            <button onClick={handleRuku}>{isLoading ? 'Tunggu' : !chapter ? 'Error' : 'Tambah Rukuʻ'}</button>
        </div>
    )
}

export default TableVerses
