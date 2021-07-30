import React from 'react'

import './Surat.css'
import { ReactComponent as MoreHorizIcon } from '../../../assets/icons/MoreHoriz-01.svg'

const Surat = ({ surat, setCurrentId }) => {
    return (
        <div className='card'>
            <div className='action'>
                <div className='index'>{surat.surah_id}</div>
                <button className='editBtn' onClick={() => setCurrentId(surat._id)}><MoreHorizIcon /></button>
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
