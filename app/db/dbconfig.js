//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

//THIS STRING WILL CHANGE SLIGHTLY
const connectionString = "mongodb+srv://other:Student123@cluster0-uoyb8.mongodb.net/test?retryWrites=true"

let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

//log any errors
connection.on('error', err => {
    console.error('[DATABASE ERROR]:', err)
})

//confirm connection
connection.once('open', () => {
    console.log('connected to the database')
})