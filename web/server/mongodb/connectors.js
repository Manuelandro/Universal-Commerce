import { MongoClient } from 'mongodb'
import { databaseUrl } from '../config'

const MONGO_URL = databaseUrl


const db = MongoClient.connect(MONGO_URL)

const Customers = db.then(dbInstance => dbInstance.collection('customers'))
const Orders = db.then(dbInstance => dbInstance.collection('orders'))
const Products = db.then(dbInstance => dbInstance.collection('products'))

export { Customers, Orders, Products }
