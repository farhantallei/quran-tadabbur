import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Appbar from './components/Appbar/Appbar'
import Home from './routes/Home'
import Chapter from './routes/Chapter'
import NotFound from './routes/NotFound'

const App = () => {
    const [title, setTitle] = useState('Quran Tadabbur data API')

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <div className="home-body">
                        <Appbar title={title} />
                        <Home setTitle={setTitle} />
                    </div>
                </Route>
                <Route path="/search" exact><Home setTitle={setTitle} /></Route>
                <Route path="/surah/:id"><Chapter setTitle={setTitle} /></Route>

                <Route path=""><NotFound /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
