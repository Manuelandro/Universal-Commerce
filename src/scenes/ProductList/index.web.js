import React from 'react'
import { withRouter } from 'react-router'
import { graphql, compose } from 'react-apollo'
import { ProductlistQuery } from '../../../server/graphql/queries/product'
import ProductList from './component.web'
import { ScrollView } from '../../components/web/'


const ProductListWithData = (props) =>
    (
        <ScrollView>
            <ProductList {...props} />
        </ScrollView>
    )


const ProductlistQueryOptions = {
    options: ({ category: { entity_id } }) => ({
        variables: {
            category: parseInt(entity_id, 10)
        }
    }),
    props: ({ ownProps, data: { loading, error, products } }) => ({
        ...ownProps, loading, error, products
    })
}

export default compose(
    graphql(ProductlistQuery, ProductlistQueryOptions),
    withRouter
)(ProductListWithData)
