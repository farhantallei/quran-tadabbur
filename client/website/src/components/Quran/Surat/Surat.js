import React from 'react'
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'

import useStyles from './styles'

const Surat = ({ surat, setCurrentId }) => {
    const classes = useStyles()
    
    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.arabic} variant="h5" gutterBottom>{surat.arabic_name}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>{surat.latin_name}</Typography>
                <Typography className={classes.title} variant="h5" gutterBottom>{surat.literal}</Typography>
            </CardContent>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{surat.aliases.map((aliases) => `${aliases}, `)}</Typography>
            </div>
            <CardContent>
                <Typography variant="body2" color="textSecondary">{surat.classification}</Typography>
                <Typography variant="body2" color="textSecondary">{surat.avail.map((avail) => `${avail}, `)}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => setCurrentId(surat._id)}>Edit</Button>
            </CardActions>
        </Card>
    )
}

export default Surat
