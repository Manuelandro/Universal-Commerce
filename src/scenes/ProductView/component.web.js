import R from 'ramda'
import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import styled from 'styled-components'
import { AddProductToQuote, AddProductToWish } from '../../../server/graphql/mutations/product'
import { ScrollView, Spinner, ErrorMsg, Button, Image } from '../../components/web/'

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

class ProductView extends Component {

    renderCallToAction(inventory) {
        if (inventory === 0) {
            return <ErrorMsg>Product not available</ErrorMsg>
        }

        return (
            <Button onPress={() => console.log('jejej')}>
                Buy Now!
            </Button>
        )
    }

    renderProduct() {
        if (R.isNil(this.props.product)) {
            return <ErrorMsg>Can't find the product</ErrorMsg>
        }

        const { name, brand, small_image, inventory } = this.props.product

        return (
            <div>
                <div>
                    <ViewHead>
                        <Name>{name}</Name>
                        <Brand>{brand}</Brand>
                    </ViewHead>
                </div>
                <div>
                    <Cover source={{ uri: small_image }} />
                </div>
                <div>
                    {this.renderCallToAction(inventory)}
                </div>
            </div>
        )
    }

    render() {
        const { loading, error } = this.props

        if (loading) {
            return <Spinner />
        }

        if (!R.isNil(error)) {
            return <ErrorMsg>Somenthing went wrong</ErrorMsg>
        }

        return (
            <ScrollView>
                {this.renderProduct()}
            </ScrollView>
        )
    }
}


const AddProductToQuoteOptions = {
    props: ({ mutate }) => ({
        addProduct: () => mutate({ variables: { product, checkout } })
    })
}

export default compose(
    graphql(AddProductToQuote, AddProductToQuoteOptions),
    graphql(AddProductToWish)
)(ProductView)