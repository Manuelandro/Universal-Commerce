import { gql } from 'react-apollo'

export const ProductlistQuery = gql`
    query Query {
        products {
            name
            small_image
            brand
            product_url
    }
}`