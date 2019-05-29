import mongoose from 'mongoose'
//let ObjectId = mongoose.Schema.Types.ObjectId
//above is how we create our many to many referance

let _schema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number },

}, { timestamps: true })

export default class GalaxyService {
    get repository() {
        return mongoose.model('Galaxy', _schema)
    }
}