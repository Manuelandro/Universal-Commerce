import R from 'ramda'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Spinner, ErrorMsg, Card, CardSection, Button } from '../../components/native/'


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


class ProductList extends Component {
    static PropTypes = {
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
        products: PropTypes.arrayOf(PropTypes.object).isRequired
    }


    renderList() {
        const { loading, error, products } = this.props

        if (loading) {
            return <Spinner />
        }

        if (typeof error !== 'undefined') {
            return <ErrorMsg>Somenthing went wrong</ErrorMsg>
        }


        return products.map(val => this.renderProduct(val))
    }

    renderProduct(product) {
        const { navigation } = this.props
        const { name, brand, small_image, urlRewrite } = product

        if (R.isNil(urlRewrite)) {
            console.log(`product ${name} was not rendered cause of urlRewrite missing`)
            return
        }


        return (
            <Card key={name}>
                <CardSection>
                    <ViewHead>
                        <Name>{name}</Name>
                        <Brand>{brand}</Brand>
                    </ViewHead>
                </CardSection>
                <CardSection>
                    <Cover
                        source={{ uri: small_image }}
                        onPress={() => navigation.navigate('Register')}
                    />
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
            <Card>
                {this.renderList()}
            </Card>
        )
    }
}


export default ProductList
