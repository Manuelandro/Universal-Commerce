import { MongoClient } from 'mongodb'

const MONGO_URL = 'mongodb://localhost:27017/graphql'


const db = MongoClient.connect(MONGO_URL)

const Customers = db.then(dbInstance => dbInstance.collection('customers'))
const Orders = db.then(dbInstance => dbInstance.collection('orders'))


export { Customers, Orders }
