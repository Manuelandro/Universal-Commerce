import React from 'react'
import { withRouter } from 'react-router'
import { graphql } from 'react-apollo'
import { ProductViewQuery } from '../../../server/graphql/queries/product'
import ProductView from './component.web'
import { ScrollView } from '../../components/web/'


const ProductViewWithData = (props) =>
    (
        <ScrollView>
            <ProductView {...props} />
        </ScrollView>
    )


const withQuery = graphql(
    ProductViewQuery, {
        options: ({ product }) => ({
            variables: {
                product: 1
            }
        }),
        props: ({ data: { loading, error, product } }) => ({
            loading, error, product
        })
    }
)

export default withQuery(
    withRouter(ProductViewWithData)
)