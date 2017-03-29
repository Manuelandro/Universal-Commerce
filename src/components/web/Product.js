import React from 'react'
import styled from 'styled-components'
import { Card, CardSection, Button, Image } from './index'

const {
    ViewHead,
    Album,
    Artist,
    ViewThumb,
    Thumb,
    Cover
} = {
    ViewHead: styled.div`
        flex-direction: column;
        justify-content: space-around;
    `,
    Album: styled.p`
        font-size: 18px;
    `,
    Artist: styled.p``,
    ViewThumb: styled.div`
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        marginleft: 10px;
    `,
    Thumb: styled(Image)`
        height: 50px;
        width: 50px;
    `,
    Cover: styled(Image)`
        width: null;
        height: 300px;
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