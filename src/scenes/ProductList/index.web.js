import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import { ProductlistQuery } from '../../../web/server/graphql/queries/product'
import ProductList from './component.web'
import { ScrollView } from '../../components/web/'

class ProductListWithData extends Component {
    render() {
        return (
            <ScrollView>
                <ProductList {...this.props} />
            </ScrollView>
        )
    }
}

const withQuery = graphql(
    ProductlistQuery, {
        options: () => ({
            variables: {
                category: 1
            }
        })
    }
)

export default withQuery(
    withRouter(ProductListWithData)
)
