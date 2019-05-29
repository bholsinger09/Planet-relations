import mongoose from 'mongoose'
let ObjectId = mongoose.Schema.Types.ObjectId

let _schema = new mongoose.Schema({
    authorId: { type: ObjectId, ref: 'user', required: true },
    imgUrl: { type: String, required: true },
    description: { type: String }
}, { timestamps: true })

export default class ChildService {
    get repository() {
        return mongoose.model('child', _schema)
    }
}