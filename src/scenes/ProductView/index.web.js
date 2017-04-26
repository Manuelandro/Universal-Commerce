import React from 'react'
import { graphql, compose } from 'react-apollo'
import { ProductViewQuery } from '../../../server/graphql/queries/product'
import ProductView from './component.web'
import { ScrollView } from '../../components/web/'


const ProductViewWithData = (props) =>
    (
        <ScrollView>
            <ProductView {...props} />
        </ScrollView>
    )


const ProductViewQueryOptions = {
    options: ({ product: { id } }) => ({
        variables: {
            product: parseInt(id, 10)
        }
    }),
    props: ({ ownProps, data: { loading, error, product } }) => ({
        ...ownProps, loading, error, product
    })
}


export default compose(
    graphql(ProductViewQuery, ProductViewQueryOptions)
)(ProductViewWithData)