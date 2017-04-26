import { gql } from 'react-apollo'

export const ProductlistQuery = gql`
    query getProductsFromCategory($category: Int!) {
        products(category: $category) {
            name
            small_image
            brand
            inventory
            urlRewrite {
                path
            }
        }
    }
`


export const ProductViewQuery = gql`
    query getProductData($product: Int!) {
        product(id: $product) {
            name
            small_image
            brand
            inventory
        }
    }
`