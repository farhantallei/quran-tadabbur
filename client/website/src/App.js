import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getData } from './actions/quran'
import Form from './components/Form/Form'
import Quran from './components/Quran/Quran'

const App = () => {
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        dispatch(getData())
    }, [currentId, dispatch])

    return (
        <>
        <div className='container'>
            <div className='layout'>
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
        </>
    )
}

export default App
