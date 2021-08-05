import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getDataBySearch, getSelectedData } from '../actions/quran'
import TableInfo from '../components/TableInfo/TableInfo'
import ThemeSurah from '../components/ThemeSurah/ThemeSurah'
import NotFound from './NotFound'

const Surah = ({ setTitle }) => {
    const { surah, surat, isLoading } = useSelector((state) => state.quran)
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    useEffect(async () => {
        const surahIndex = await dispatch(getSelectedData(id))
        setTitle(`Surah no ${surahIndex}`)
    }, [dispatch, id])

    useEffect(() => {
        if (surah) {
            dispatch(getDataBySearch({ search: 'none', index: [surah.surah_index-1, surah.surah_index+1] }))
        }
    }, [dispatch, surah])

    const openSurah = (i) => {
        history.push(`/surah/${surat[i].surah_id}`)
    }

    if (!surah && !isLoading) return (<NotFound />)

    if (isLoading) {
        return (<div>Loading</div>)
    }
    
    // !isLoading && setTitle(`Surah no ${surah.surah_index}`)

    return (
        <div className="surah-layout" >
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">Information</div>
                <TableInfo surah={surah} />
            </div>
            <div className="grid-layout">
                <div className="grid-layout-header uppercase">Ayat</div>
                {surat.length > 1 ? (
                    <>
                    <h1>PREV</h1>
                    <div className='item'>
                        <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => openSurah(0)}>
                            <div className='action'>
                                <div className='index' style={{ backgroundColor: 'white' }}>{surat[0].surah_index}</div>
                            </div>
                            <div className='content'>
                                <div className='arabic title' style={{ color: 'white' }}>{surat[0].arabic_name}</div>
                                <div className='info'>
                                    <div className='latin' style={{ color: 'white' }}>{surat[0].latin_name}</div>
                                    <div className='literal' style={{ color: 'white' }}>{surat[0].literal}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>NEXT</h1>
                    <div className='item'>
                        <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => openSurah(1)}>
                            <div className='action'>
                                <div className='index' style={{ backgroundColor: 'white' }}>{surat[1].surah_index}</div>
                            </div>
                            <div className='content'>
                                <div className='arabic title' style={{ color: 'white' }}>{surat[1].arabic_name}</div>
                                <div className='info'>
                                    <div className='latin' style={{ color: 'white' }}>{surat[1].latin_name}</div>
                                    <div className='literal' style={{ color: 'white' }}>{surat[1].literal}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                ) : surat[0].surah_index > surah.surah_index ? (
                    <>
                    <h1>NEXT</h1>
                    <div className='item'>
                        <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => openSurah(0)}>
                            <div className='action'>
                                <div className='index' style={{ backgroundColor: 'white' }}>{surat[0].surah_index}</div>
                            </div>
                            <div className='content'>
                                <div className='arabic title' style={{ color: 'white' }}>{surat[0].arabic_name}</div>
                                <div className='info'>
                                    <div className='latin' style={{ color: 'white' }}>{surat[0].latin_name}</div>
                                    <div className='literal' style={{ color: 'white' }}>{surat[0].literal}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                ) : (
                    <>
                    <h1>PREV</h1>
                    <div className='item'>
                        <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => openSurah(0)}>
                            <div className='action'>
                                <div className='index' style={{ backgroundColor: 'white' }}>{surat[0].surah_index}</div>
                            </div>
                            <div className='content'>
                                <div className='arabic title' style={{ color: 'white' }}>{surat[0].arabic_name}</div>
                                <div className='info'>
                                    <div className='latin' style={{ color: 'white' }}>{surat[0].latin_name}</div>
                                    <div className='literal' style={{ color: 'white' }}>{surat[0].literal}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                ) }
            </div>
            <div className="grid-layout side">
                <div className="grid-layout-header uppercase">Description</div>
            </div>
        </div>
    )
}

export default Surah
