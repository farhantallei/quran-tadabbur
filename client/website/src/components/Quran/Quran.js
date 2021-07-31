import React from 'react'
import { useSelector } from 'react-redux'

import Surat from './Surat/Surat'
import './Quran.css'

const Quran = ({ currentId, setCurrentId }) => {
    const quran = useSelector((state) => state.quran)

    quran.sort((a, b) => parseFloat(a.surah_id) - parseFloat(b.surah_id))
    // quran.sort((a, b) => (a.literal > b.literal) ? 1 : ((b.literal > a.literal) ? -1 : 0))
    
    return (
        !quran.length ? <div>LOADING</div> : quran.map((surat) => (
            <div key={surat._id} className='item'>
                <Surat surat={surat} currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        ))
    )
}

export default Quran
