export const coreSchema = `
    type Core {
    entity_id: ID!
    store: CoreStore
    language: String!
    }


    type CoreStore {
    entity_id: ID!
    storeName: String!
    storeCountry: String!
    storeCurrency: String!
    }


    type CoreResource {
    entity_id: ID!
    websiteUrl: Url
    staticUrl: Url
    }


    type CoreDesign {
    entity_id: ID!
    theme: String
    }

`