import React, { Component } from 'react'
import { ScrollView, Product, Spinner, ErrorMsg } from '../../components/native'

class ProductView extends Component {

    renderProduct() {
        const { data } = this.props

        if (data.loading) {
            return <Spinner />
        }

        if (typeof data.error !== 'undefined') {
            return <ErrorMsg>Somenthing went wrong</ErrorMsg>
        }

        return (
            <Product product={data.product} key={data.product.name} />
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderProduct()}
            </ScrollView>
        )
    }
}

export default ProductView