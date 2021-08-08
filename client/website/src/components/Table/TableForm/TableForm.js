import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { addAyah, updateAyah } from '../../../actions/quran'

const TableForm = ({ isLoading, surah, ayahInput, setAyahInput, clearInput, ruku, rukuIndex, ayahIndex, isRuku, isAyah }) => {
    const dispatch = useDispatch()
    const arabicField = useRef()

    useEffect(() => {
        isAyah && setAyahInput({ arabic: ruku[rukuIndex][ayahIndex].ayah.arabic.join('|'), latin: ruku[rukuIndex][ayahIndex].ayah.latin.join('|'), translation: ruku[rukuIndex][ayahIndex].ayah.translation.join('|') })
        arabicField.current.focus()
    }, [rukuIndex, ayahIndex])

    const handleSubmit = (e) => {
        e.preventDefault()

        const submitData = { arabic: ayahInput.arabic.split('|'), latin: ayahInput.latin.split('|'), translation: ayahInput.translation.split('|') }

        const submitArabic = submitData.arabic.toString()
        const submitLatin = submitData.latin.toString()
        const submitTranslation = submitData.translation.toString()

        if (!isLoading && surah) {
            if(isRuku && !isAyah) {
                dispatch(addAyah(surah._id, rukuIndex, submitData))
                ruku[rukuIndex].push({ ayah: submitData })
                clearInput()
            }

            if(isRuku && isAyah) {
                const dataArabic = ruku[rukuIndex][ayahIndex].ayah.arabic.toString()
                const dataLatin = ruku[rukuIndex][ayahIndex].ayah.latin.toString()
                const dataTranslation = ruku[rukuIndex][ayahIndex].ayah.translation.toString()

                if(submitArabic === dataArabic && submitLatin === dataLatin && submitTranslation === dataTranslation) {
                    alert("Silahkan ubah datanya atau tekan reset kalau tidak jadi mengedit")
                    arabicField.current.focus()
                    return false
                } else {
                    dispatch(updateAyah(surah._id, rukuIndex, ayahIndex, submitData))
                    ruku[rukuIndex][ayahIndex] = { ayah: submitData }
                    clearInput()
                }
            }
        }
    }

    return (
        <div className="form-layout">
            <div className="form-scroll">
                <div className="form-content">
                    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
                        <label className="label">Ayat di <span>Arabic</span> <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className="arabic text-area" ref={arabicField} rows={4} disabled={!isRuku} name="arabic" type="text" required value={ayahInput.arabic} onChange={(e) => setAyahInput({ ...ayahInput, arabic: e.target.value })} />

                        <label className="label">Ayat di <span>Latin</span> <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className="text-area" rows={4} disabled={!isRuku} name="latin" type="text" required value={ayahInput.latin} onChange={(e) => setAyahInput({ ...ayahInput, latin: e.target.value })} />

                        <label className="label"><span>Arti</span> Ayat <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className="text-area" rows={4} disabled={!isRuku} name="translation" type="text" required value={ayahInput.translation} onChange={(e) => setAyahInput({ ...ayahInput, translation: e.target.value })} />

                        <input className="submit" disabled={!isRuku} type="submit" value={(isRuku && isAyah) ? 'Edit!' : isRuku ? 'Simpan!' : 'Pilih Ruku!'} />
                    </form>
                    <button className="reset" onClick={clearInput}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default TableForm
