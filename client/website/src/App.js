import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Appbar from './components/Appbar/Appbar'
import Home from './routes/Home'
import Surah from './routes/Surah'
import NotFound from './routes/NotFound'

const App = () => {
    const [title, setTitle] = useState('')

    return (
        <BrowserRouter>
            <Appbar title={title} />
            <Switch>
                <Route path="/" exact><Home setTitle={setTitle} /></Route>
                <Route path="/search" exact><Home setTitle={setTitle} /></Route>
                <Route path="/surah/:id"><Surah setTitle={setTitle} /></Route>

                <Route path=""><NotFound /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
