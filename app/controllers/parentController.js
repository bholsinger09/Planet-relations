import ParentService from '../services/ParentService';
import express from 'express'
import ChildService from '/services/childService';


let _service = new 
let _repo = _service.repository

let _photoRepo = new PhotoService().repository

export default class UserController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAll)
            .get('/:id', this.getById)
            .get('/:id/', this.get)
           //.get many to many 
            .put('/:id', this.edit)
            .post('', this.create)
            //here we could also have a post and delete many to many
            .post('/:id/friends', this.)
            .delete('/:id', this.delete)
            //here we can have a delete that deletes by our many to many id
            .delete('/:id/manytomany/:manytomanyId', this.deleteMany
            .use('*', this.defaultRoute)
    }

    //GET STUFF
    async getAllUsers(req, res, next) {
        try {
            let  = await _repo.find({})
            return res.send()
        } catch (error) { next(error) }
    }
    async getUserById(req, res, next) {
        try {
            let  = await _repo.findById(req.params.id)
            return res.send()
        } catch (error) { next(error) }
    }
    //async for child repo
    async get(req, res, next) {
        try {
            let photos = await _childRepo.find({ childPropId: req.params.id })
            return res.send()
        } catch (error) { next(error) }

    }
    //here is many to many aysnc with .populate('array')
    async getFriends(req, res, next) {
        try {
            let user = await _repo.findById(req.params.id).populate('')
            return res.send()
        } catch (error) { next(error) }
    }







//edit parent
    async edit(req, res, next) {

    }
    //create parent
    async create(req, res, next) {
        try {
            let user = await _repo.create(req.body)
            return res.status(201).send()
        } catch (error) { next(error) }
    }

    //add many to many example would be friends 
    async add(req, res, next) {
        try {
            //here we store to variables
            //first variable will be the parent example user
            //second variable will be who ever is our many to many example friendId
            let  = await _repo.findById(req.params.id)
            let  = req.body.manytomanyId
            //here is going to be our push manytomany onto our parent
            //example user.friends.puch(friendId)
            parent.manytomany.push(manytomanyId)
            parent.save(err => {
                if (err) {
                    return next(err)
                }
                return res.send(parent)
            })
        } catch (error) { next(error) }
    }

    //here is the asyc for deleting parent
    async delete(req, res, next) {

    }

    //here is the asyc to delete manytomany ex friend
    async delete(req, res, next) {

    }
    defaultRoute(req, res, next) {
        res.status(404).send('No such route')
    }
}