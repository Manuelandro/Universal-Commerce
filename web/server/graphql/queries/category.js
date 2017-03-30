import { gql } from 'react-apollo'

export const CategoriesListQuery = gql`
    query Query {
        categories {
            entity_id
            name
            category_url
    }
}`