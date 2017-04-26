import { gql } from 'react-apollo'

export const AddProductToQuote = gql`
    mutation addProductToQuote($product: Int!) {
        products(id: $product) {
            inventory
        }
    }
`


export const AddProductToWish = gql`
    mutation addProductToWish($product: Int!) {
        products(id: $product) {
            inventory
        }
    }
`