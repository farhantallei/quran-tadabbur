import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'

import { getData, getDataBySearch } from '../actions/quran'
import Form from '../components/Form/Form'
import Quran from '../components/Quran/Quran'

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

const Home = ({ setTitle }) => {
    const dispatch = useDispatch()
    const query = useQuery()
    const history = useHistory()
    const searchQuery = query.get('q')

    const [currentId, setCurrentId] = useState(0)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setTitle('Quran Tadabbur data API')
        if (searchQuery) dispatch(getDataBySearch({ search: searchQuery, index: '' }))
        else dispatch(getData())
    }, [dispatch, searchQuery])

    const searchSurah = () => {
        setCurrentId(0)
        if (searchTerm.trim()) {
            dispatch(getDataBySearch({ search: searchTerm, index: '' }))
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
        <div className='home-layout'>
            <div className='home-container'>
                <div className='layout'>
                    <input className='search' name='search' type='text' value={searchTerm} onKeyDown={handleKeyPress} onChange={(e) => setSearchTerm(e.target.value)}  />
                    <div className='menu'>
                        <div className='menu-content'>
                            <Quran currentId={currentId} setCurrentId={setCurrentId} setTitle={setTitle} />
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
