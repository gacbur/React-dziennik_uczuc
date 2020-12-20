import React from 'react'

import AddRecord from '../pages/AddRecord'
import Analyze from '../pages/Analyze'
import Options from '../pages/Options'
import Records from '../pages/Records'

import { Route, Switch } from 'react-router-dom'

const Main = () => {
    return (
        <div className="main">
            <Switch>
                <Route exact path="/" component={AddRecord} />
                <Route exact path="/wpisy" component={Records} />
                <Route exact path="/analiza" component={Analyze} />
                <Route exact path="/opcje" component={Options} />
            </Switch>
        </div >
    )
}

export default Main
