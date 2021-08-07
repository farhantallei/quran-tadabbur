import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addAyah } from '../../../actions/quran'

const TableForm = ({ isLoading, surah, ruku, rukuIndex, setRukuIndex, isRuku }) => {
    const dispatch = useDispatch()
    const [ayahData, setAyahData] = useState({ arabic: '', latin: '', translation: '' })
    const arabicField = useRef()

    useEffect(() => {
        arabicField.current.focus()
    }, [rukuIndex])

    const handleSubmit = (e, index) => {
        e.preventDefault()

        if (!isLoading && surah && isRuku) {
            dispatch(addAyah(surah._id, index, { arabic: ayahData.arabic.split('|'), latin: ayahData.latin.split('|'), translation: ayahData.translation.split('|') }))
            ruku[index].push({ ayah: { arabic: ayahData.arabic.split('|'), latin: ayahData.latin.split('|'), translation: ayahData.translation.split('|') } })
        }

        clear()
    }

    const clear = () => {
        setRukuIndex(null)
        setAyahData({ arabic: '', latin: '', translation: '' })
    }

    return (
        <div className="form-layout f-scroll">
            <form className="form" autoComplete="off" onSubmit={(e) => handleSubmit(e, rukuIndex)}>
                <label className="label">Ayat di <span>Arabic</span> <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                <input className="arabic field" ref={arabicField} disabled={!isRuku} name="arabic" type="text" required value={ayahData.arabic} onChange={(e) => setAyahData({ ...ayahData, arabic: e.target.value })} />

                <label className="label">Ayat di <span>Latin</span> <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                <input className="field" disabled={!isRuku} name="latin" type="text" required value={ayahData.latin} onChange={(e) => setAyahData({ ...ayahData, latin: e.target.value })} />

                <label className="label"><span>Arti</span> Ayat <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                <input className="field" disabled={!isRuku} name="translation" type="text" required value={ayahData.translation} onChange={(e) => setAyahData({ ...ayahData, translation: e.target.value })} />

                <input className="submit" disabled={!isRuku} type="submit" value={isRuku ? 'Tambahkan!' : 'Pilih Ruku!'} />
            </form>
            <button className="reset" onClick={clear}>Reset</button>
        </div>
    )
}

export default TableForm
