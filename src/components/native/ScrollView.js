import React from 'react'
import styled from 'styled-components/native'

const { WrapperScrollView } = {
    WrapperScrollView: styled.ScrollView`
        backgroundColor: #fff;
    `
}

const ScrollView = ({ children }) =>
    <WrapperScrollView>
        {children}
    </WrapperScrollView>

export { ScrollView }