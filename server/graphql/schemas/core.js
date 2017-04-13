export const coreSchema = `
    type Core {
    entity_id: ID!
    storeName: String!
    storeCountry: String!
    language: String!
    }


    type CoreShipping {
    entity_id: ID!
    }


    type CorePayment {
    entity_id: ID!
    }
`