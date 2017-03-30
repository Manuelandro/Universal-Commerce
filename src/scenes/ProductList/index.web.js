import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import { ScrollView, Spinner, ErrorMsg, Product } from '../../components/web/'

const ProductlistQuery = gql`
    query Query {
        products {
            name
            small_image
            brand
        }
    }`

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