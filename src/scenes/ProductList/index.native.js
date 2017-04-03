import React from 'react'
import { RefreshControl } from 'react-native'
import { graphql } from 'react-apollo'
import { ProductlistQuery } from '../../../server/graphql/queries/product'
import ProductList from './component.native'
import { ScrollView } from '../../components/native'

const ProductListWithData = (props) =>
    <ScrollView
        refreshControl={ // http://dev.apollodata.com/react/simple-example.html
            <RefreshControl
                refreshing={props.networkStatus === 4}
                onRefresh={props.refetch}
            />
        }
    >
        <ProductList {...props} />
    </ScrollView>


const withQuery = graphql(
    ProductlistQuery, {
        name: 'ProductsFromCategory',
        options: ({ category }) => ({
            variables: {
                category: 1
            }
        }),
        props: ({ ownProps, ProductsFromCategory: { loading, error, products, networkStatus, refetch } }) => ({
            ...ownProps, loading, error, products, networkStatus, refetch
        })
    }
)

export default withQuery(
    ProductListWithData
)