import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { addVerse, updateVerse } from '../../../actions/quran'

const TableForm = ({ isLoading, chapter, verseInput, setVerseInput, clearInput, ruku, rukuIndex, setRukuIndex, verseIndex, isRuku, isVerse }) => {
    const dispatch = useDispatch()
    const arabicField = useRef()
    const [currentRukuIndex, setCurrentRukuIndex] = useState(null)

    useEffect(() => {
        isVerse && setVerseInput({ arabic: ruku[rukuIndex][verseIndex].verse.arabic.join('|'), latin: ruku[rukuIndex][verseIndex].verse.latin.join('|'), translation: ruku[rukuIndex][verseIndex].verse.translation.join('|') })
        arabicField.current.focus()
        isRuku && setCurrentRukuIndex(rukuIndex)
    }, [rukuIndex, verseIndex])

    const handleSubmit = () => {
        const submitData = { arabic: verseInput.arabic.split('|'), latin: verseInput.latin.split('|'), translation: verseInput.translation.split('|') }

        const submitArabic = submitData.arabic.toString()
        const submitLatin = submitData.latin.toString()
        const submitTranslation = submitData.translation.toString()

        if (!isLoading && chapter) {
            if(isRuku && !isVerse) {
                dispatch(addVerse(chapter._id, rukuIndex, submitData))
                ruku[rukuIndex].push({ verse: submitData })
                clearInput()
            }

            if(isRuku && isVerse) {
                const dataArabic = ruku[rukuIndex][verseIndex].verse.arabic.toString()
                const dataLatin = ruku[rukuIndex][verseIndex].verse.latin.toString()
                const dataTranslation = ruku[rukuIndex][verseIndex].verse.translation.toString()

                if(submitArabic === dataArabic && submitLatin === dataLatin && submitTranslation === dataTranslation) {
                    alert("Silahkan ubah datanya atau tekan reset kalau tidak jadi mengedit")
                    arabicField.current.focus()
                    return false
                } else {
                    dispatch(updateVerse(chapter._id, rukuIndex, verseIndex, submitData))
                    ruku[rukuIndex][verseIndex] = { verse: submitData }
                    clearInput()
                }
            }
        }
    }

    const handleAddMore = () => {
        
        const submitData = { arabic: verseInput.arabic.split('|'), latin: verseInput.latin.split('|'), translation: verseInput.translation.split('|') }

        if (!isLoading && chapter) {
            if(isRuku && !isVerse) {
                dispatch(addVerse(chapter._id, rukuIndex, submitData))
                ruku[rukuIndex].push({ verse: submitData })
                setRukuIndex(currentRukuIndex)
                setVerseInput({ arabic: '', latin: '', translation: '' })
                arabicField.current.focus()
            }
        }
    }

    return (
        <div className="form-layout">
            <div className="form-scroll">
                <div className="form-content">
                    <form className="form" autoComplete="off">
                        <label className="label">Ayat di <span>Arabic</span> <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className="arabic text-area" ref={arabicField} rows={4} disabled={!isRuku} name="arabic" type="text" value={verseInput.arabic} onChange={(e) => setVerseInput({ ...verseInput, arabic: e.target.value })} />

                        <label className="label">Ayat di <span>Latin</span> <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className="text-area" rows={4} disabled={!isRuku} name="latin" type="text" value={verseInput.latin} onChange={(e) => setVerseInput({ ...verseInput, latin: e.target.value })} />

                        <label className="label"><span>Arti</span> Ayat <em>(pisah dengan tanda</em> &nbsp; <code><b>|</b></code> <em>)</em></label>
                        <textarea className="text-area" rows={4} disabled={!isRuku} name="translation" type="text" value={verseInput.translation} onChange={(e) => setVerseInput({ ...verseInput, translation: e.target.value })} />
                    </form>
                    <button className="reset" disabled={(isRuku && isVerse) ? true : isRuku ? false : true} onClick={handleAddMore}>Add more</button>
                    <button className="submit" disabled={!isRuku} onClick={handleSubmit}>{(isRuku && isVerse) ? 'Edit!' : isRuku ? 'Simpan!' : 'Pilih Ruku!'}</button>
                    <button className="reset" onClick={clearInput}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default TableForm
