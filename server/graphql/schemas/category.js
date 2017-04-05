import { Catalogs, Products, Rewrites } from '../../mongodb/connectors'

export const categorySchema = `
    type Category {
    entity_id: ID!
    name: String
    catalog: Catalog
    urlRwrite: Rewrite
    products: [Product]
    }
`

export const categoryResolver = {
    Category: {
        catalog: ({ catalog }) =>
            Catalogs.then(res => res.find({ entity_id: catalog }).toArray()),

        urlRwrite: ({ urlRwrite }) =>
            Rewrites.then(res => res.findOne({ entity_id: urlRwrite })),

        products: () =>
            Products.then(res => res.find({}).toArray()),
    }
}