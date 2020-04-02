import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from '../history'

import HomeView from  '../views/HomeView'
import ProductListView from  '../views/ProductListView'
import ProductView from  '../views/ProductView'

function Routes({...props}) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={HomeView}></Route>
                <Route exact path='/items' component={ProductListView}></Route>
                <Route exact path='/items/:id' component={ProductView}></Route>
                <Redirect from='*' to='/' />
            </Switch>
        </Router>
    )
}

export default Routes