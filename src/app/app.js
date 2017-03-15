import React from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import ProductList from '../components/ProductList'

const UniversalApp = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Universal App'} />
    <ProductList />
  </View>
)

export default UniversalApp