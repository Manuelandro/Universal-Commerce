import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CategoriesListQuery } from '../../../web/server/graphql/queries/category'
import Login from '../../scenes/Login/index.web'
import ProductList from '../../scenes/ProductList/index.web'
import About from '../../scenes/About/index.web'


class RouterComponent extends Component {

    renderCategories() {
        const { data } = this.props

        if (data.loading) {
            return
        }

        return data.categories.map((val, indx) =>
            <Route path={`/${val.category_url}`} component={ProductList} key={indx} />
        )
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/about" component={About} />
                    {this.renderCategories()}
                </div>
            </Router>
        )
    }

}




export default graphql(CategoriesListQuery)(RouterComponent)