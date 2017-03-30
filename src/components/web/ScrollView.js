import React from 'react'
import styled from 'styled-components'

const { WrapperScrollView } = {
    WrapperScrollView: styled.div`
        background-color: #fff;
    `
}

const ScrollView = ({ children }) =>
    <WrapperScrollView>
        {children}
    </WrapperScrollView>

export { ScrollView }