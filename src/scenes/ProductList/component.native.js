import React from 'react'
import { Spinner, ErrorMsg, Product, Card } from '../../components/native/'

const ProductList = ({ loading, error, products }) => {
    if (loading) {
        return <Spinner />
    }

    if (typeof error !== 'undefined') {
        return <ErrorMsg>Somenthing went wrong</ErrorMsg>
    }


    return (
        <Card>
            {products.map(val =>
                <Product product={val} key={val.name} />
            )}
        </Card>
    )
}


export default ProductList
