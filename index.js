//important tools from pg library
import pg from 'pg'
const { Client } = pg

//import connection string from credentials / secrets file
import { connectionURI } from './creds.js'


//create client connection to database
const client = new Client({
connectionString: connectionURI,

})
//open connection 
await client.connect()
//run query
const time = await client.query('SELECT NOW()')

console.log(time)


//close connection

