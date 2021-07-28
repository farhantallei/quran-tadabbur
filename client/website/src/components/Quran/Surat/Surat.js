import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

import useStyles from './styles'

const Surat = ({ quran, setCurrentId }) => {
    const classes = useStyles()
    
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.arabic} variant="h5" gutterBottom>{quran.arabic_name}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>{quran.latin_name}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>{quran.literal}</Typography>
            </CardContent>
            <div className={classes.details}>
                {/* <Typography variant="body2" color="textSecondary">{quran.aliases.map((aliases) => `${aliases}, `)}</Typography> */}
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary">{quran.classification}</Typography>
                {/* <Typography variant="body2" color="textSecondary">{quran.avail.map((avail) => `${avail}, `)}</Typography> */}
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => setCurrentId(quran._id)}>Edit</Button>
                <Button size="small" color="secondary" onClick={() => {}}>Delete</Button>
            </CardActions>
        </Card>
    )
}

export default Surat
