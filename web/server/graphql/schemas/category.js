import { Catalogs, Products } from '../../mongodb/connectors'

export const categorySchema = `
    type Category {
    entity_id: ID!
    name: String
    catalog: Catalog
    category_url: String
    products: [Product]
    }
`

export const categoryResolver = {
    Category: {
        catalog: (category) =>
            Catalogs.then(res => res.find({ entity_id: category.catalog }).toArray()),

        products: () =>
            Products.then(res => res.find({}).toArray()),
    }
}