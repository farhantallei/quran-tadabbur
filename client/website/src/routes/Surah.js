import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getDataBySearch, getSelectedData } from '../actions/quran'
import TableAyat from '../components/Table/TableAyat/TableAyat'
import TableInfo from '../components/Table/TableInfo/TableInfo'
import ThemeSurah from '../components/ThemeSurah/ThemeSurah'

const Surah = ({ setTitle }) => {
    const dispatch = useDispatch()
    const { surah, surat, isLoading } = useSelector((state) => state.quran)
    const { id } = useParams()

    const [ruku, setRuku] = useState([])

    useEffect(() => {
        const fetchSelectedData = async () => {
            const surahIndex = await dispatch(getSelectedData(id))
            surahIndex && setTitle(`Surah no ${surahIndex}`)
        }
        fetchSelectedData()
    }, [dispatch, id])

    useEffect(() => {
        if (surah) {
            dispatch(getDataBySearch({ search: 'none', index: [surah.surah_index-1, surah.surah_index+1] }))
        }
    }, [dispatch, surah])

    return (
        <div className="surah-layout" >
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">Informasi</div>
                <TableInfo surah={surah} isLoading={isLoading} />
            </div>
            <div className="grid-layout">
                <div className="grid-layout-header uppercase">Ayat</div>
                {/* {!isLoading && surah && <TableAyat surah={surah} isLoading={isLoading} />} */}
                <TableAyat ruku={ruku} setRuku={setRuku} />
            </div>
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">Deskripsi</div>
                {!isLoading && surah && <ThemeSurah surah={surah} surat={surat} setTitle={setTitle} setRuku={setRuku} />}
            </div>
        </div>
    )
}

export default Surah
