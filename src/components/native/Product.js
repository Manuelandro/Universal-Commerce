import React from 'react'
import { Text, View, Image } from 'react-native'
import { Card, CardSection, Button } from './index'

const {
    headerContentStyle,
    albumNameStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    imageCoverStyles
} = {
    headerContentStyle: {
        flexDirection: 'column',
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


const Product = ({ album: { title, artist, thumbnail_image, image } }) =>
    <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
            </View>
            <View style={headerContentStyle}>
                <Text style={albumNameStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>
        <CardSection>
            <Image source={{ uri: image }} style={imageCoverStyles} />
        </CardSection>
        <CardSection>
            <Button onPress={() => console.log('jejej')}>
                Buy Now!
            </Button>
        </CardSection>
    </Card>


export { Product }