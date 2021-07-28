import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, MenuItem, Paper, TextField, Typography } from '@material-ui/core'

import { createData, updateData } from '../../actions/quran'
import useStyles from './styles'

const Form = ({ currentId, setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [quranData, setQuranData] = useState({ arabic_name: '', latin_name: '', literal: '', aliases: '', classification: '', mysterious_letters: false, avail: '' })
    const quran = useSelector(state => currentId ? state.quran.find((surah) => surah._id === currentId) : null)

    useEffect(() => {
        if (quran) setQuranData(quran)
    }, [quran])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (currentId === 0) dispatch(createData(quranData))
        else dispatch(updateData(currentId, quranData))
        
        clear()
    }

    const clear = () => {
        setCurrentId(0)
        setQuranData({ arabic_name: '', latin_name: '', literal: '', aliases: '', classification: '', mysterious_letters: false, avail: '' })
    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Edit' : 'Masukkan'} informasi data Surah</Typography>
                <TextField name="arabic_name" variant="outlined" label="Nama Surah dalam Arabic" fullWidth required value={quranData.arabic_name} onChange={(e) => setQuranData({ ...quranData, arabic_name: e.target.value })} />
                <TextField name="latin_name" variant="outlined" label="Nama Surah dalam Latin" fullWidth required value={quranData.latin_name} onChange={(e) => setQuranData({ ...quranData, latin_name: e.target.value })} />
                <TextField name="literal" variant="outlined" label="Arti Surah" fullWidth required value={quranData.literal} onChange={(e) => setQuranData({ ...quranData, literal: e.target.value })} />
                <TextField name="aliases" variant="outlined" label="Nama Lain dari Surah (koma tanpa spasi)" fullWidth value={quranData.aliases} onChange={(e) => setQuranData({ ...quranData, aliases: e.target.value.split(',') })} />
                <TextField name="classification" variant="outlined" label="Tempat turunnya Surah" fullWidth required select value={quranData.classification} onChange={(e) => setQuranData({ ...quranData, classification: e.target.value })}>
                    <MenuItem value="Makiyah">Makiyah</MenuItem>
                    <MenuItem value="Madaniyah">Madaniyah</MenuItem>
                </TextField>
                <TextField name="mysterious_letters" variant="outlined" label="Ada huruf Muqatta'at?" fullWidth required select value={quranData.mysterious_letters} onChange={(e) => setQuranData({ ...quranData, mysterious_letters: e.target.value })}>
                    <MenuItem value={true}>Ada</MenuItem>
                    <MenuItem value={false}>Tidak ada</MenuItem>
                </TextField>
                <TextField name="avail" variant="outlined" label="Faedah Surah (koma tanpa spasi)" fullWidth value={quranData.avail} onChange={(e) => setQuranData({ ...quranData, avail: e.target.value.split(',') })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
