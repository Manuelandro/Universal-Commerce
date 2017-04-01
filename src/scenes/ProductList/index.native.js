import React, { Component } from 'react'
import { RefreshControl } from 'react-native'
import { graphql } from 'react-apollo'
import { ProductlistQuery } from '../../../web/server/graphql/queries/product'
import ProductList from './component.native'
import { ScrollView } from '../../components/native'

class ProductListWithData extends Component {
    render() {
        const { data } = this.props

        return (
            <ScrollView
                refreshControl={ // http://dev.apollodata.com/react/simple-example.html
                    <RefreshControl
                        refreshing={data.networkStatus === 4}
                        onRefresh={data.refetch}
                    />
                }
            >
                <ProductList />
            </ScrollView>
        )
    }
}

export default graphql(ProductlistQuery)(ProductListWithData)