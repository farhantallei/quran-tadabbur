import React from 'react'

import './Surat.css'

const Surat = ({ surat, currentId, setCurrentId }) => {
    return (
        <div className={currentId === surat._id ? 'card card-active' : 'card'}>
            <div className='action'>
                <div className='index'>{surat.surah_index}</div>
                <button className='editBtn' onClick={() => setCurrentId(surat._id)}><svg xmlns="http://www.w3.org/2000/svg" fill={currentId === surat._id ? 'white' : '#c7c7cc'} viewBox="0 0 30 12"><circle cx="3.5" cy="6" r="3.5"/><circle cx="26.5" cy="6" r="3.5"/><circle cx="15" cy="6" r="3.5"/></svg></button>
            </div>
            <div className='content'>
                <div className='arabic title'>{surat.arabic_name}</div>
                <div className='info'>
                    <div className='latin'>{surat.latin_name}</div>
                    <div className='literal'>{surat.literal}</div>
                </div>
            </div>
        </div>
    )
}

export default Surat
