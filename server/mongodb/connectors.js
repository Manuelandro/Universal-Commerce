import { MongoClient } from 'mongodb'
import { databaseUrl } from '../config'

const MONGO_URL = databaseUrl
const db = MongoClient.connect(MONGO_URL)


export const Core = db.then(dbInstance => dbInstance.collection('core'))

export const Cms = db.then(dbInstance => dbInstance.collection('cms'))

export const Rewrites = db.then(dbInstance => dbInstance.collection('url_rewrites'))

export const Customers = db.then(dbInstance => dbInstance.collection('customers'))

export const Orders = db.then(dbInstance => dbInstance.collection('orders'))

export const Catalogs = db.then(dbInstance => dbInstance.collection('catalogs'))

export const Categories = db.then(dbInstance => dbInstance.collection('categories'))

export const Products = db.then(dbInstance => dbInstance.collection('products'))

export const Checkout = db.then(dbInstance => dbInstance.collection('checkout'))

export const Addresses = db.then(dbInstance => dbInstance.collection('addresses'))

export const ShippingMethods = db.then(dbInstance => dbInstance.collection('shipping_methods'))

export const PaymentMethods = db.then(dbInstance => dbInstance.collection('payment_methods'))