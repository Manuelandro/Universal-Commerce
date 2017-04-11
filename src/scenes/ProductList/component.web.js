import React, { PropTypes } from 'react'
import { Spinner, ErrorMsg, Product } from '../../components/web/'

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


ProductList.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    products: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default ProductList
