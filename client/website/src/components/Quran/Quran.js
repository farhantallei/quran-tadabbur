import React from 'react'
import { useSelector } from 'react-redux'
import { CircularProgress, Grid } from '@material-ui/core'

import Surat from './Surat/Surat'
import useStyles from './styles'

const Quran = ({ setCurrentId }) => {
    const classes = useStyles()
    const quran = useSelector((state) => state.quran)
    
    return (
        !quran.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {quran.map((quran) => (
                    <Grid key={quran._id} item xs={12} sm={6}>
                        <Surat quran={quran} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Quran
