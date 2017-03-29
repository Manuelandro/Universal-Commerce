import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../../scenes/Login/index.web'
import ProductList from '../../scenes/ProductList/index.web'
import About from '../../scenes/About/index.web'


const RouterComponent = () =>
    <Router>
        <div>
            <Route exact path="/" component={Login} />
            <Route path="/productlist" component={ProductList} />
            <Route path="/about" component={About} />
        </div>
    </Router>



export default RouterComponent