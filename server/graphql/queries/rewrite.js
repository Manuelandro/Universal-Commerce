import { gql } from 'react-apollo'

export const RewritesList = gql`
    query getAllRewrites {
        rewrites {
            id
            type
            path
            isEnabled
            exact
            ... on RewriteSystem {
                system
            }
            ... on RewriteCategory {
                category {
                    id
                }
            }
            ... on RewriteProduct {
                product {
                    id
                }
            }
            ... on RewriteCms {
                cms {
                    id
                }
            }
        }
    }
`