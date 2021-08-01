import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Surah from './routes/Surah'

const App = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Home} />
                <Route path="/:id" component={Surah} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
