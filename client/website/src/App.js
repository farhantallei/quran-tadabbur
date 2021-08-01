import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Surah from './routes/Surah'
import NotFound from './routes/NotFound'

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Home} />
                <Route path="/:id" component={Surah} />

                <Route path="" component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
