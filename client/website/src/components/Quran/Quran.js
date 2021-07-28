import React from 'react'
import { useSelector } from 'react-redux'

import Surat from './Surat/Surat'
import useStyles from './styles'

const Quran = () => {
    const classes = useStyles()
    const quran = useSelector((state) => state.quran)

    console.log(quran)
    
    return (
        <>
        <h1>Data</h1>
        <Surat />
        <Surat />
        </>
    )
}

export default Quran
