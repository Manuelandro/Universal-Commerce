import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import { ProductlistQuery } from '../../../server/graphql/queries/product'
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
        options: ({ category }) => ({
            variables: {
                category: parseInt(1)
            }
        }),
        props: ({ data: { loading, error, products } }) => ({
            loading, error, products
        })
    }
)

export default withQuery(
    withRouter(ProductListWithData)
)
