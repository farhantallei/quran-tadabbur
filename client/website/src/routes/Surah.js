import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getDataBySearch, getSelectedData } from '../actions/quran'
import TableAyat from '../components/Table/TableAyat/TableAyat'
import TableForm from '../components/Table/TableForm/TableForm'
import TableInfo from '../components/Table/TableInfo/TableInfo'

const Surah = ({ setTitle }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    const { surah, surat, isLoading } = useSelector((state) => state.quran)
    const [ruku, setRuku] = useState([])
    const [rukuIndex, setRukuIndex] = useState(null)
    const isRuku = typeof rukuIndex === 'number'

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

    useEffect(() => {
        !isLoading && surah && setRuku(surah.position)
    }, [isLoading])

    const openSurah = (i) => {
        setRuku([])
        history.push(`/surah/${surat[i].surah_id}`)
        setTitle(`Surah no ${surat[i].surah_index}`)
    }

    return (
        <div className="surah-layout" >
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">Informasi</div>
                <TableInfo isLoading={isLoading} surah={surah} />
            </div>
            <div className="grid-layout">
                <div className="grid-layout-header uppercase">Ayat</div>
                <TableAyat isLoading={isLoading} surah={surah} ruku={ruku} setRuku={setRuku} setRukuIndex={setRukuIndex} />
            </div>
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">{isRuku ? `Input Ayat di Ruku ${rukuIndex+1}` : 'Pilih Ruku!'}</div>
                <TableForm isLoading={isLoading} surah={surah} ruku={ruku} setRuku={setRuku} rukuIndex={rukuIndex} setRukuIndex={setRukuIndex} isRuku={isRuku} />
                <div className="surah-nav">
                    {surat.length > 1 ? (<>
                        <button className="surah-nav-prev" onClick={() => openSurah(0)} >Prev</button>
                        <button className="surah-nav-next" onClick={() => openSurah(1)} >Next</button>
                    </>) : (
                        <button className="surah-nav-prev" onClick={() => openSurah(0)} >{!isLoading && (surat[0].surah_index > surah.surah_index) ? 'Next' : 'Prev'}</button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Surah
