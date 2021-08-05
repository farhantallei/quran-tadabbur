import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addTheme, updateTheme } from '../../actions/quran'

const ThemeSurah = ({ surah, surat, setTitle, setRuku }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [currentId, setCurrentId] = useState(0)
    const [themes, setThemes] = useState(surah?.position)
    const [themeInput, setThemeInput] = useState('')
    const [themeIndex, setThemeIndex] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        let updatedTheme = surah?.position
        
        if (currentId === 0) themeInput ? (updatedTheme = await dispatch(addTheme(surah._id, themeInput))) : (updatedTheme = await dispatch(addTheme(surah._id, themes.length)))
        else themeInput ? (updatedTheme = await dispatch(updateTheme(currentId, { i: themeIndex, theme: themeInput}))) : (updatedTheme = await dispatch(updateTheme(currentId, { i: themeIndex, theme: themeIndex})))

        setThemes(updatedTheme)
        clear()
    }

    const edit = (index, theme) => {
        setCurrentId(surah._id)
        setThemeIndex(index)
        setThemeInput(theme)
    }

    const clear = () => {
        setCurrentId(0)
        setThemeInput('')
    }

    const openSurah = (i) => {
        setRuku([])
        history.push(`/surah/${surat[i].surah_id}`)
        setTitle(`Surah no ${surat[i].surah_index}`)
    }
    
    return (
        <>
            {surat.length > 1 ? (
                <>
                <h1>PREV</h1>
                <div style={{ width: '100%' }} className='item'>
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
                <div style={{ width: '100%' }} className='item'>
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
                <div style={{ width: '100%' }} className='item'>
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
                <div style={{ width: '100%' }} className='item'>
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
            {/* <h1>Themes</h1>
            {themes.map((value, index) => (
                <div key={index} style={{ userSelect: 'none' }} onClick={() => edit(index, value.theme.toString())}>
                    <p>{value.theme}</p>
                </div>
            ))}
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type='text' value={themeInput} onChange={(e) => setThemeInput(e.target.value)} />
                <input type='submit'value={currentId ? 'Edit theme' : 'Add theme'} />
            </form>
            <button onClick={clear}>Clear</button> */}
        </>
    )
}

export default ThemeSurah
