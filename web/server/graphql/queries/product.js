import { gql } from 'react-apollo'

export const ProductlistQuery = gql`
    query getProductsFromCategory($category: Int!) {
        products(category: $category) {
            name
            small_image
            brand
            product_url
    }
}`