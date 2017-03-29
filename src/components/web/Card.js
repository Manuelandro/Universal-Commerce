import React from 'react'
import styled from 'styled-components'

const { View } = {
    View: styled.div`
        border-width: 1px;
        border-radius: 2px;
        border-color: #ddd;
        border-bottom-width: 0;
        box-shadow: 0, 2px 9px #000;
        margin-left: 5px;
        margin-right: 5px;
        margin-top: 10px;
    `
}

const Card = ({ children }) =>
    <View>
        {children}
    </View>


export { Card }

