import { Catalogs, Products, Rewrites } from '../../mongodb/connectors'

export const categorySchema = `
    type Category {
    entity_id: ID!
    name: String
    catalog: Catalog
    urlRewrite: Rewrite
    products: [Product]
    }
`

export const categoryResolver = {
    Category: {
        catalog: ({ catalog }) =>
            Catalogs.then(res => res.find({ entity_id: catalog }).toArray()),

        urlRewrite: ({ entity_id }) =>
            Rewrites.then(res => res.findOne({ category: entity_id })),

        products: ({ entity_id }) =>
            Products.then(res => res.find({ category: entity_id }).toArray()),
    }
}