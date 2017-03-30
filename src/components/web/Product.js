import React from 'react'
import styled from 'styled-components'
import { Card, CardSection, Button, Image } from './index'

const {
    ViewHead,
    Name,
    Brand,
    Cover
} = {
    ViewHead: styled.div`
        display: flex;
        height: 50px;
        flex-direction: column;
        justify-content: space-around;
    `,
    Name: styled.p`
        font-size: 18px;
        margin: 0;
    `,
    Brand: styled.p`
        margin: 0;
    `,
    Cover: styled(Image)`
        width: auto;
        margin: 0 auto;
        height: 300px;
        flex: 1;
    `
}


const Product = ({ product: { name, brand, small_image } }) =>
    <Card>
        <CardSection>
            <ViewHead>
                <Name>{name}</Name>
                <Brand>{brand}</Brand>
            </ViewHead>
        </CardSection>
        <CardSection>
            <Cover source={{ uri: small_image }} />
        </CardSection>
        <CardSection>
            <Button onPress={() => console.log('jejej')}>
                Buy Now!
            </Button>
        </CardSection>
    </Card>


export { Product }