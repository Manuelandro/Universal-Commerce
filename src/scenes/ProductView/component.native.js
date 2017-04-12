import React, { Component } from 'react'
import styled from 'styled-components/native'
import { ScrollView, Card, CardSection, Button, Spinner, ErrorMsg } from '../../components/native'

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


class ProductView extends Component {

    renderProduct() {
        const { product, loading, error } = this.props
        const { name, brand, small_image } = product

        if (loading) {
            return <Spinner />
        }

        if (typeof product === 'undefined') {
            return <Spinner />
        }

        if (typeof error !== 'undefined') {
            return <ErrorMsg>Somenthing went wrong</ErrorMsg>
        }

        return (
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
        )
    }

    render() {
        return (
            <ScrollView>
                {this.renderProduct()}
            </ScrollView>
        )
    }
}

export default ProductView