import React from 'react'
import styled from 'styled-components/native'
import { Card, CardSection, Button } from './index'

const {
    ViewHead,
    Name,
    Brand,
    Cover
} = {
    ViewHead: styled.View`
        flexDirection: column;
        justifyContent: space-around;
    `,
    Name: styled.Text`
        fontSize: 18;
    `,
    Brand: styled.Text``,
    Cover: styled.Image`
        height: 300;
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