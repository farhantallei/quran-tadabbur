import React from 'react'
import { useSelector } from 'react-redux'

import Chapters from './Chapters/Chapters'

const Quran = ({ currentId, setCurrentId, setTitle }) => {
    const { chapters, isLoading } = useSelector((state) => state.quran)

    // chapters.sort((a, b) => parseFloat(a.surah_id) - parseFloat(b.surah_id))
    // chapters.sort((a, b) => (a.literal > b.literal) ? 1 : ((b.literal > a.literal) ? -1 : 0))

    if (!chapters.length && !isLoading) return 'No data'
    
    return (
        isLoading ? <div>LOADING</div> : chapters.map((chapters) => (
            <div key={chapters._id} className='item'>
                <Chapters chapters={chapters} currentId={currentId} setCurrentId={setCurrentId} setTitle={setTitle} />
            </div>
        ))
    )
}

export default Quran
