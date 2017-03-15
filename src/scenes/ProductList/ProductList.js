import axios from 'axios'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Product from '../../components/Product'
import { PageTitle } from '../../components/common'

class ProductList extends Component {
    constructor() {
        super()
        this.state = { albums: [] }
    }

    componentWillMount() {
        axios('https://rallycoding.herokuapp.com/api/music_albums')
            //.then((res) => JSON.stringify(res))
            .then((res) => this.setState({ albums: res.data }))
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <Product album={album} />
        )
    }

    render() {
        console.log(this.state)
        return (
            <ScrollView>
                <PageTitle title="Product List" />
                {this.renderAlbums()}
            </ScrollView>
        )
    }
}

export default ProductList