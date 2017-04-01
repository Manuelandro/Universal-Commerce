import React from 'react'
import { Spinner, ErrorMsg, Product } from '../../components/native/'

const ProductList = ({ data }) => {
    if (data.loading) {
        return <Spinner />
    }

    if (typeof data.error !== 'undefined') {
        return <ErrorMsg>Somenthing went wrong</ErrorMsg>
    }


    return data.products.map(val =>
        <Product product={val} key={val.name} />
    )
}


export default ProductList
