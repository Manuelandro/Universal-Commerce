import React from 'react'
import { Text, View, Image } from 'react-native'
import { Card, CardSection, Button } from './index'

const Product = ({ album: { title, artist, thumbnail_image, image } }) =>
    <Card>
        <CardSection>
            <View style={styles.thumbnailContainerStyle}>
                <Image source={{ uri: thumbnail_image }} style={styles.thumbnailStyle} />
            </View>
            <View style={styles.headerContentStyle}>
                <Text style={styles.albumNameStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>
        <CardSection>
            <Image source={{ uri: image }} style={styles.imageCoverStyles} />
        </CardSection>
        <CardSection>
            <Button onPress={() => console.log('jejej')}>
                Buy Now!
            </Button>
        </CardSection>
    </Card>


const styles = {
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


export { Product }