import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getDataBySearch, getSelectedData } from '../actions/quran'
import TableInfo from '../components/TableInfo/TableInfo'
import ThemeSurah from '../components/ThemeSurah/ThemeSurah'

const Surah = ({ setTitle }) => {
    const { surah, surat, isLoading } = useSelector((state) => state.quran)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(async () => {
        const surahIndex = await dispatch(getSelectedData(id))
        surahIndex && setTitle(`Surah no ${surahIndex}`)
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
                {<TableInfo surah={surah} isLoading={isLoading} />}
            </div>
            <div className="grid-layout">
                <div className="grid-layout-header uppercase">Ayat</div>
            </div>
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">Deskripsi</div>
                {!isLoading && surah && <ThemeSurah surah={surah} surat={surat} setTitle={setTitle} />}
            </div>
        </div>
    )
}

export default Surah
