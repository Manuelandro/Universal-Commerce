import React from 'react'
import styled from 'styled-components'

const { View } = {
    View: styled.div`
        flex: 1;
        justify-content: center;
        align-items: center;
    `
}

const Spinner = ({ size }) =>
    <View>
        {size}
    </View>


export { Spinner }