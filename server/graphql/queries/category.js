import { gql } from 'react-apollo'

export const CategoriesListQuery = gql`
    query getCategories {
        categories {
            entity_id
            name
            urlRewrite {
                path
            }
    }
}`