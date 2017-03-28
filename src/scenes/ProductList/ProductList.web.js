import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

const ProductlistQuery = gql`
    query Query {
        products {
            name
        }
    }`

class ProductList extends Component {
    constructor() {
        super()
        this.state = { albums: [] }
    }

    render() {
        return (
            <div>
                ddd
            </div>
        )
    }
}

export default graphql(ProductlistQuery)(ProductList)