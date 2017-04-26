import { gql } from 'react-apollo'

export const CategoriesListQuery = gql`
    query getCategories {
        categories {
            id
            name
            urlRewrite {
                path
            }
    }
}`