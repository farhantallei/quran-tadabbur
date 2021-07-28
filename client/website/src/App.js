import React, { useEffect } from 'react'
import { AppBar, Button, Container, Grid, Grow, InputBase, Toolbar, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getData } from './actions/quran'
import Form from './components/Form/Form'
import Quran from './components/Quran/Quran'
import useStyles from './styles'

const App = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getData())
    }, [dispatch])

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" align="center">Quran Data</Typography>
                <div className={classes.search}>
                    <InputBase placeholder="Search" classes={{ root: classes.inputRoot, input: classes.inputInput }} inputProps={{ 'aria-label': 'search' }} />
                </div>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Quran />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </>
    )
}

export default App
