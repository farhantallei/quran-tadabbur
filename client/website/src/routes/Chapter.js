import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'

import { getDataBySearch, getSelectedData } from '../actions/quran'
import TableVerses from '../components/Table/TableVerses/TableVerses'
import TableForm from '../components/Table/TableForm/TableForm'
import TableInfo from '../components/Table/TableInfo/TableInfo'

const Chapter = ({ setTitle }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()
    const { chapter, chapters, isLoading } = useSelector((state) => state.quran)
    const [verseInput, setVerseInput] = useState({ arabic: '', latin: '', translation: '' })
    const [ruku, setRuku] = useState([])
    const [rukuIndex, setRukuIndex] = useState(null)
    const [verseIndex, setVerseIndex] = useState(null)
    const isRuku = typeof rukuIndex === 'number'
    const isVerse = typeof verseIndex === 'number'

    useEffect(() => {
        const fetchSelectedData = async () => {
            const chapterIndex = await dispatch(getSelectedData(id))
            chapterIndex && setTitle(`Surah no ${chapterIndex}`)
        }
        fetchSelectedData()
    }, [dispatch, id])

    useEffect(() => {
        if (chapter) {
            dispatch(getDataBySearch({ search: 'none', index: [chapter.chapter_index-1, chapter.chapter_index+1] }))
        }
    }, [dispatch, chapter])

    useEffect(() => {
        !isLoading && chapter && setRuku(chapter.position)
    }, [isLoading])

    const currentVerseIndex = (rukuI, verseI) => {
        let totalVerse = verseI+1
        for(let i = 0; i < rukuI; i++) {
            totalVerse += ruku[rukuI-(i+1)].length
        }
        return totalVerse
    }

    const openChapter = (i) => {
        setRuku([])
        history.push(`/surah/${chapters[i].chapter_id}`)
        setTitle(`Surah no ${chapters[i].chapter_index}`)
        clearInput()
    }

    const clearInput = () => {
        setRukuIndex(null)
        setVerseIndex(null)
        setVerseInput({ arabic: '', latin: '', translation: '' })
    }

    return (
        <div className="surah-layout" >
            <div className="grid-layout side">
                <div className="surah-nav">
                    <div className="left-bar">
                        <Link to="/">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0.763776 26.6006C-0.254591 22.2591 -0.254592 17.7409 0.763774 13.3994C2.23443 7.12981 7.12981 2.23443 13.3994 0.763773C17.7409 -0.254589 22.2591 -0.254593 26.6006 0.763772C32.8702 2.23443 37.7656 7.12981 39.2362 13.3994C40.2546 17.7409 40.2546 22.2591 39.2362 26.6006C37.7656 32.8702 32.8702 37.7656 26.6006 39.2362C22.2591 40.2546 17.7409 40.2546 13.3994 39.2362C7.1298 37.7656 2.23443 32.8702 0.763776 26.6006ZM21.2944 19.9926L21.2927 19.5992C21.2792 18.0387 21.1851 16.6464 21.0229 15.764C21.0229 15.7481 20.8459 14.873 20.7332 14.5817C20.5562 14.1607 20.2362 13.8033 19.835 13.5769C19.5138 13.4153 19.1769 13.3333 18.8241 13.3333C18.5469 13.3462 18.0896 13.4857 17.7632 13.6027L17.492 13.7066C15.6957 14.4202 12.2618 16.7517 10.9467 18.1776L10.8497 18.2772L10.417 18.7443C10.1442 19.1016 10 19.5386 10 20.0086C10 20.4296 10.1285 20.8506 10.3854 21.1909C10.4624 21.3011 10.5863 21.4425 10.6966 21.562L11.1178 22.0029C12.5672 23.4714 15.7054 25.5313 17.332 26.2138C17.332 26.2285 18.3429 26.6507 18.8241 26.6667H18.8884C19.6265 26.6667 20.3162 26.2456 20.669 25.5651C20.7653 25.3791 20.8577 25.0147 20.928 24.6946L21.0544 24.0903C21.1986 23.1185 21.2944 21.6278 21.2944 19.9926ZM28.3297 21.687C29.2521 21.687 30 20.9319 30 20.0005C30 19.0691 29.2521 18.3139 28.3297 18.3139L24.2195 18.6774C23.4958 18.6774 22.9092 19.2686 22.9092 20.0005C22.9092 20.7312 23.4958 21.3235 24.2195 21.3235L28.3297 21.687Z" fill="#D1D1D6"/></svg>
                        </Link>
                    </div>
                    {chapters.length > 1 ? (<>
                        <button className="surah-nav-prev" onClick={() => openChapter(0)} >Prev</button>
                        <button className="surah-nav-next" onClick={() => openChapter(1)} >Next</button>
                    </>) : (
                        <button className="surah-nav-prev" onClick={() => openChapter(0)} >{!isLoading && chapter && (chapters[0].chapter_index > chapter.chapter_index) ? 'Next' : 'Prev'}</button>
                    )}
                </div>
                <TableInfo isLoading={isLoading} chapter={chapter} />
            </div>
            <div className="grid-layout">
                <TableVerses isLoading={isLoading} chapter={chapter} ruku={ruku} setRuku={setRuku} setRukuIndex={setRukuIndex} setVerseIndex={setVerseIndex} currentVerseIndex={currentVerseIndex} />
            </div>
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">{(isRuku && isVerse) ? `Edit Ayat ${currentVerseIndex(rukuIndex, verseIndex)}` : isRuku ? `Input Ayat di Ruku ${rukuIndex+1}` : 'Pilih Ruku atau Ayat!'}</div>
                <TableForm isLoading={isLoading} chapter={chapter} verseInput={verseInput} setVerseInput={setVerseInput} clearInput={clearInput} ruku={ruku} setRuku={setRuku} rukuIndex={rukuIndex} verseIndex={verseIndex} isRuku={isRuku} isVerse={isVerse} />
            </div>
        </div>
    )
}

export default Chapter
