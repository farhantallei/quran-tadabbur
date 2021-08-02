import React from 'react'
import { useSelector } from 'react-redux'

import Surat from './Surat/Surat'
import './Quran.css'

const Quran = ({ currentId, setCurrentId }) => {
    const { surat, isLoading } = useSelector((state) => state.quran)

    // surat.sort((a, b) => parseFloat(a.surah_id) - parseFloat(b.surah_id))
    // surat.sort((a, b) => (a.literal > b.literal) ? 1 : ((b.literal > a.literal) ? -1 : 0))

    if (!surat.length && !isLoading) return 'No data'
    
    return (
        isLoading ? <div>LOADING</div> : surat.map((surat) => (
            <div key={surat._id} className='item'>
                <Surat surat={surat} currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        ))
    )
}

export default Quran
