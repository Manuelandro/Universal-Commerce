import { gql } from 'react-apollo'

export const ConfigurationQuery = gql`
    query getConfiguration {
        core {
            entity_id
            storeName
            storeCountry
        }
    }
`