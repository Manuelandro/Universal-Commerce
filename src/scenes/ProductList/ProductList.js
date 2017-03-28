import axios from 'axios'
import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'
import { ScrollView } from 'react-native'
import Product from '../../components/Product'

const ProductlistQuery = gql`
    query products {
        entity_id
        name
        price
    }`

class ProductList extends Component {
    constructor() {
        super()
        this.state = { albums: [] }
    }

    componentWillMount() {
        //axios('https://rallycoding.herokuapp.com/api/music_albums')
            //.then((res) => JSON.stringify(res))
            //.then((res) => this.setState({ albums: res.data }))
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <Product album={album} key={album.title} />
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default graphql(ProductlistQuery)(ProductList)