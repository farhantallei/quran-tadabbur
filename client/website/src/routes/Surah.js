import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { getSelectedData } from '../actions/quran'

const Surah = () => {
    const { surah, quran, isLoading } = useSelector((state) => state.quran)
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    useEffect(() => {
        dispatch(getSelectedData(id))
    }, [id])

    if (!surah) return null
    if (isLoading) {
        return (<div>Loading</div>)
    }

    return (
        <div>
            <h1 dir='rtl' style={{textAlign: 'left'}}>{surah.arabic_name}</h1>
            <h1>{surah.latin_name}</h1>
            <h1>{surah.literal}</h1>
            <h1>{surah.classification}</h1>
            <h1>{surah.aliases.length > 1 ? surah.aliases.map((aliases) => `${aliases}, `) : surah.aliases}</h1>
            <h1>{surah.avail.length > 1 ? surah.avail.map((avail) => `${avail}, `) : surah.avail}</h1>
            <h1>{surah.mysterious_letters ? 'ada' : 'tidak ada'}</h1>
        </div>
    )
}

export default Surah
