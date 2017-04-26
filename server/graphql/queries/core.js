import { gql } from 'react-apollo'

export const ConfigurationQuery = gql`
    query getConfiguration {
        core {
            id
            storeName
            storeCountry
        }
    }
`