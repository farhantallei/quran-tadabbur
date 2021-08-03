import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTheme, updateTheme } from '../../actions/quran'
import './styles.css'

const ThemeSurah = ({ surah }) => {
    const dispatch = useDispatch()

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
    
    return (
        <>
            <h1>Themes</h1>
            {themes.map((value, index) => (
                <div key={index} style={{ userSelect: 'none' }} onClick={() => edit(index, value.theme.toString())}>
                    <p>{value.theme}</p>
                </div>
            ))}
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type='text' value={themeInput} onChange={(e) => setThemeInput(e.target.value)} />
                <input type='submit'value={currentId ? 'Edit theme' : 'Add theme'} />
            </form>
            <button onClick={clear}>Clear</button>
        </>
    )
}

export default ThemeSurah
