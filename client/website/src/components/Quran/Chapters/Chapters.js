import React from 'react'
import { useHistory } from 'react-router-dom'

const Chapters = ({ chapters, currentId, setCurrentId, setTitle }) => {
    const history = useHistory()

    const openSurah = () => {
        history.push(`/surah/${chapters.surah_id}`)
        setTitle(`Surah no ${chapters.surah_index}`)
    }

    return (
        <div className={currentId === chapters._id ? 'card card-active' : 'card'} onDoubleClick={openSurah}>
            <div className='action'>
                <div className='index'>{chapters.surah_index}</div>
                <button className='editBtn' onClick={() => setCurrentId(chapters._id)}><svg xmlns="http://www.w3.org/2000/svg" fill={currentId === chapters._id ? 'white' : '#c7c7cc'} viewBox="0 0 30 12"><circle cx="3.5" cy="6" r="3.5"/><circle cx="26.5" cy="6" r="3.5"/><circle cx="15" cy="6" r="3.5"/></svg></button>
            </div>
            <div className='content'>
                <div className='arabic title'>{chapters.arabic_name}</div>
                <div className='info'>
                    <div className='latin'>{chapters.latin_name}</div>
                    <div className='literal'>{chapters.literal}</div>
                </div>
            </div>
        </div>
    )
}

export default Chapters
