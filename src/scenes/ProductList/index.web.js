import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import { ScrollView } from '../../components/web/'

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
            <ScrollView>
                ddd
            </ScrollView>
        )
    }
}

export default graphql(ProductlistQuery)(ProductList)