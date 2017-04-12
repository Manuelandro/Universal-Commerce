import R from 'ramda'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ScrollView, Spinner, ErrorMsg, Card, CardSection, Button, Image } from '../../components/web/'

const {
    ViewHead,
    Name,
    Brand,
    Cover,
    Section
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
    `,
    Section: styled(CardSection)`
        justify-content: center;
    `
}


class ProductList extends Component {
    static PropTypes = {
        loading: PropTypes.bool.isRequired,
        error: PropTypes.string,
        products: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    renderList() {
        const { products } = this.props

        if (typeof products === 'undefined') {
            return <Spinner />
        }

        return products.map(val => this.renderProduct(val))
    }

    renderProduct(product) {
        const { name, brand, small_image, inventory, urlRewrite } = product

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
                <Section>
                    <Link to={urlRewrite.path}>
                        <Cover source={{ uri: small_image }} />
                    </Link>
                </Section>
                <CardSection>
                    <Button onPress={() => console.log('jejej')}>
                        Buy Now!
                    </Button>
                </CardSection>
            </Card>
        )
    }

    render() {
        const { loading, error } = this.props

        if (loading) {
            return <Spinner />
        }

        if (typeof error !== 'undefined') {
            return <ErrorMsg>Somenthing went wrong</ErrorMsg>
        }

        return (
            <ScrollView>
                {this.renderList()}
            </ScrollView>
        )
    }
}


export default ProductList
