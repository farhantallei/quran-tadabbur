import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { getData, getDataBySearch } from '../actions/quran'
import Form from '../components/Form/Form'
import Quran from '../components/Quran/Quran'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = () => {
    const dispatch = useDispatch()
    const query = useQuery()
    const history = useHistory()
    const search = query.get('search')

    const [currentId, setCurrentId] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        searchSurah()
    }, [dispatch])

    const searchSurah = () => {
        if (searchTerm.trim()) {
            dispatch(getDataBySearch(searchTerm))
            history.push(`/search?q=${searchTerm}`)
        } else {
            dispatch(getData())
            history.push('/')
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) searchSurah()
    }

    return (
        <div className='home-grid'>
            <div className='container'>
                <div className='layout'>
                    <input className='search' name='search' type='text' value={searchTerm} onKeyDown={handleKeyPress} onChange={(e) => setSearchTerm(e.target.value)}  />
                    <button onClick={searchSurah}>Search</button>
                    <div className='menu'>
                        <div className='menu-content'>
                            <Quran currentId={currentId} setCurrentId={setCurrentId} />
                        </div>
                    </div>
                </div>
            </div>
            <aside className='side'>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </aside>
        </div>
    )
}

export default Home
