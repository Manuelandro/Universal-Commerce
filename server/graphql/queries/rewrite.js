import { gql } from 'react-apollo'

export const RewritesList = gql`
    query getAllRewrites {
        rewrites {
            entity_id
            type
            path
            isEnabled
            exact
            ... on RewriteSystem {
                system
            }
            ... on RewriteCategory {
                category {
                    entity_id
                }
            }
            ... on RewriteProduct {
                product {
                    entity_id
                }
            }
            ... on RewriteCms {
                cms {
                    entity_id
                }
            }
        }
    }
`