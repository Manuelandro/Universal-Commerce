import React from 'react'
import styled from 'styled-components'
import { Image } from './'

const { View, Text, Logo, Burger, Cart } = {
    View: styled.div`
        display: flex;
        height: 60px;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        position: relative;
    `,
    Text: styled.p`
        font-size: 20px;
    `,
    Logo: styled(Image)`
        height: 40px;
    `,
    Burger: styled.div`
        width: 40px;
        height: 22px;
        background: url('../images/sticky_burger.png') 0 0 no-repeat;
        background-size: contain;
        cursor: pointer;
    `,
    Cart: styled.div`
        width: 40px;
        height: 28px;
        background: url('../images/sticky_cart.png') 0 0 no-repeat;
        background-size: contain;
        cursor: pointer;
    `
}

const Header = ({ headerText }) =>
    (
        <View>
            <Burger>&nbsp;</Burger>
            <Logo source={{ uri: '../images/logo.svg' }} />
            <Cart>&nbsp;</Cart>
        </View>
    )



export { Header }
