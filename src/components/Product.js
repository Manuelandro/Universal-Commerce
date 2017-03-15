import React from 'react'
import { Text, View, Image } from 'react-native'
import ProductItem from './ProductItem'
import ProductItemDefault from './ProductItemDefault'
import Button from './Button'

const Product = ({ album: { title, artist, thumbnail_image, image } }) =>
    <ProductItem>
        <ProductItemDefault>
            <View style={styles.thumbnailContainerStyle}>
                <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.albumNameStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </ProductItemDefault>
        <ProductItemDefault>
            <Image source={{ uri: image }} style={styles.imageCoverStyles} />
        </ProductItemDefault>
        <ProductItemDefault>
            <Button />
        </ProductItemDefault>
    </ProductItem>


const styles = {
    headerContentStyle: {
        flewDirection: 'column',
        justifyContent: 'space-around'
    },
    albumNameStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageCoverStyles: {
        width: null,
        height: 300,
        flex: 1
    }
}


export default Product