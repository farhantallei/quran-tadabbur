import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core'

import { createData } from '../../actions/quran'
import useStyles from './styles'

const Form = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [quranData, setQuranData] = useState({ arabic_name: '', latin_name: '', literal: '', aliases: '', classification: '', mysterious_letters: false, avail: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(createData(quranData))
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Masukkan informasi data Surah</Typography>
                <TextField name="arabic_name" variant="outlined" label="Nama Surah dalam Arabic" fullWidth required value={quranData.arabic_name} onChange={(e) => setQuranData({ ...quranData, arabic_name: e.target.value })} />
                <TextField name="latin_name" variant="outlined" label="Nama Surah dalam Latin" fullWidth required value={quranData.latin_name} onChange={(e) => setQuranData({ ...quranData, latin_name: e.target.value })} />
                <TextField name="literal" variant="outlined" label="Arti Surah" fullWidth required value={quranData.literal} onChange={(e) => setQuranData({ ...quranData, literal: e.target.value })} />
                <TextField name="aliases" variant="outlined" label="Nama Lain dari Surah (koma tanpa spasi)" fullWidth value={quranData.aliases} onChange={(e) => setQuranData({ ...quranData, aliases: e.target.value })} />
                <TextField name="classification" variant="outlined" label="Tempat turunnya Surah" fullWidth required select value={quranData.classification} onChange={(e) => setQuranData({ ...quranData, classification: e.target.value })}>
                    <MenuItem value="Makiyah">Makiyah</MenuItem>
                    <MenuItem value="Madaniyah">Madaniyah</MenuItem>
                </TextField>
                {/* <FormControl variant="outlined" fullWidth required>
                    <InputLabel id="cassification-label">Tempat turunnya Surah</InputLabel>
                    <Select labelId="cassification-label" id="cassification" value={quranData.classification} onChange={(e) => setQuranData({ ...quranData, classification: e.target.value })}>
                        <MenuItem value={undefined}>Pilih salah satu!</MenuItem>
                        <MenuItem value="Makiyah">Makiyah</MenuItem>
                        <MenuItem value="Madaniyah">Madaniyah</MenuItem>
                    </Select>
                </FormControl> */}
                <TextField name="avail" variant="outlined" label="Faedah Surah (koma tanpa spasi)" fullWidth value={quranData.avail} onChange={(e) => setQuranData({ ...quranData, avail: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="large" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
