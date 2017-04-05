import { MongoClient } from 'mongodb'
import { databaseUrl } from '../config'

const MONGO_URL = databaseUrl
const db = MongoClient.connect(MONGO_URL)


export const Core = db.then(dbInstance => dbInstance.collection('core'))

export const Customers = db.then(dbInstance => dbInstance.collection('customers'))

export const Orders = db.then(dbInstance => dbInstance.collection('orders'))

export const Catalogs = db.then(dbInstance => dbInstance.collection('catalogs'))

export const Categories = db.then(dbInstance => dbInstance.collection('categories'))

export const Products = db.then(dbInstance => dbInstance.collection('products'))

export const Cms = db.then(dbInstance => dbInstance.collection('cms'))

export const Rewrites = db.then(dbInstance => dbInstance.collection('url_rewrites'))