import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { CategoriesListQuery } from '../../../web/server/graphql/queries/category'
import Login from '../../scenes/Login/index.web'
import ProductList from '../../scenes/ProductList/index.web'
import ProductView from '../../scenes/ProductView/index.web'
import About from '../../scenes/About/index.web'


class RouterComponent extends Component {

    renderCategories() {
        const { data } = this.props

        if (data.loading) {
            return
        }
        /* eslint-disable camelcase */
        return data.categories.map(({ category_url, entity_id }, indx) =>
            <div key={indx}>
                <Route path={`/${category_url}`} component={ProductList} key={`${indx}_${indx}`} entity_id={entity_id} />
                <Route path={`/${category_url}/:productUrl`} component={ProductView} key={`${indx}_${indx}_${indx}`} />
            </div>
        )
        /* eslint-enable camelcase */
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