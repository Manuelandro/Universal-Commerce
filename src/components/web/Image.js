import React from 'react'
import styled from 'styled-components'

const { Img } = {
    Img: styled.img`
        display: block;
    `
}

const Image = ({ source }) =>
    <Img src={source.uri} />

export { Image }