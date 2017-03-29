import React from 'react'
import styled from 'styled-components/native'
import { Card, CardSection, Button } from './index'

const {
    ViewHead,
    Album,
    Artist,
    ViewThumb,
    Thumb,
    Cover
} = {
    ViewHead: styled.View`
        flexDirection: column;
        justifyContent: space-around;
    `,
    Album: styled.View`
        fontSize: 18;
    `,
    Artist: styled.View``,
    ViewThumb: styled.View`
        justifyContent: center;
        alignItems: center;
        marginRight: 10;
        marginLeft: 10;
    `,
    Thumb: styled.Image`
        height: 50;
        width: 50;
    `,
    Cover: styled.Image`
        width: null;
        height: 300;
        flex: 1;
    `
}


const Product = ({ album: { title, artist, thumbnail_image, image } }) =>
    <Card>
        <CardSection>
            <ViewThumb>
                <Thumb source={{ uri: thumbnail_image }} />
            </ViewThumb>
            <ViewHead>
                <Album>{title}</Album>
                <Artist>{artist}</Artist>
            </ViewHead>
        </CardSection>
        <CardSection>
            <Cover source={{ uri: image }} />
        </CardSection>
        <CardSection>
            <Button onPress={() => console.log('jejej')}>
                Buy Now!
            </Button>
        </CardSection>
    </Card>


export { Product }