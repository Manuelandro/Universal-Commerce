import React from 'react'
import { Spinner, ErrorMsg, Product } from '../../components/native/'

const ProductList = ({ loading, error, products }) => {
    if (loading) {
        return <Spinner />
    }

    if (typeof error !== 'undefined') {
        return <ErrorMsg>Somenthing went wrong</ErrorMsg>
    }


    return (
        <div>
            {products.map(val =>
                <Product product={val} key={val.name} />
            )}
        </div>
    )
}


export default ProductList