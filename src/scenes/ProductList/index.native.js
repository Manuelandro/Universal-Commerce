import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { ProductlistQuery } from '../../../web/server/graphql/queries/product'
import { ScrollView, Product, Spinner, ErrorMsg } from '../../components/native'

class ProductList extends Component {

    renderProducts() {
        const { data } = this.props

        if (data.loading) {
            return <Spinner />
        }

        if (typeof data.error !== 'undefined') {
            return <ErrorMsg>Somenthing went wrong</ErrorMsg>
        }

        return data.products.map(val =>
            <Product product={val} key={val.name} />
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderProducts()}
            </ScrollView>
        )
    }
}

export default graphql(ProductlistQuery)(ProductList)