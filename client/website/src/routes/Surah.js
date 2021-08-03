import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getDataBySearch, getSelectedData } from '../actions/quran'
import ThemeSurah from '../components/ThemeSurah/ThemeSurah'
import NotFound from './NotFound'

const Surah = () => {
    const { surah, surat, isLoading } = useSelector((state) => state.quran)
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSelectedData(id))
    }, [dispatch, id])

    useEffect(() => {
        if (surah) {
            dispatch(getDataBySearch({ search: 'none', index: [surah.surah_index-1, surah.surah_index+1] }))
        }
    }, [dispatch, surah])

    if (!surah && !isLoading) return (<NotFound />)

    if (isLoading) {
        return (<div>Loading</div>)
    }

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, top: 0, height: '100%', width: '100%'}} >
            <h1>Surah ke {surah.surah_index}</h1>
            <h1 dir='rtl'>{surah.arabic_name}</h1>
            <h1>{surah.latin_name}</h1>
            <h1>{surah.literal}</h1>
            <h1>{surah.classification}</h1>
            <h1>{surah.aliases.length > 1 ? surah.aliases.map((aliases) => `${aliases}, `) : surah.aliases}</h1>
            <h1>{surah.avail.length > 1 ? surah.avail.map((avail) => `${avail}, `) : surah.avail}</h1>
            <h1>Muqata'at: {surah.mysterious_letters ? 'ada' : 'tidak ada'}</h1>
            <ThemeSurah surah={surah} />
            {surat.length > 1 ? (
                <>
                <h1>PREV</h1>
                <div className='item'>
                    <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => history.push(`/surah/${surat[0].surah_id}`)}>
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
                    <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => history.push(`/surah/${surat[1].surah_id}`)}>
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
                    <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => history.push(`/surah/${surat[0].surah_id}`)}>
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
                    <div className='card' style={{ backgroundColor: '#007aff' }} onClick={() => history.push(`/surah/${surat[0].surah_id}`)}>
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
    )
}

export default Surah
