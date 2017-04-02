import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import { ProductlistQuery } from '../../../web/server/graphql/queries/product'
import ProductList from './component.web'
import { ScrollView } from '../../components/web/'

const ProductListWithData = (props) =>
    (
        <ScrollView>
            <ProductList {...props} />
        </ScrollView>
    )


const withQuery = graphql(
    ProductlistQuery, {
        name: 'ProductsFromCategory',
        options: ({ category }) => ({
            variables: {
                category: parseInt(1)
            }
        }),
        props: ({ ProductsFromCategory: { loading, error, products } }) => ({
            loading, error, products
        })
    }
)

export default withQuery(
    withRouter(ProductListWithData)
)
