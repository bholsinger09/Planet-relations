
import express from 'express'
import GalaxyService from '../Services/GalaxyService';



let _service = new GalaxyService()

let _repo = _service.repository



export default class GalaxyController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAllGallaxies)
            .get('/:id', this.getAllGallaxies)
            .put('/:id', this.editGalaxy)
            .post('', this.createGalaxy)
            .delete('/:id', this.deleteGalaxy)
            .use('*', this.defaultRoute)
        //.get('/:id/', this.)
        //.get many to many 

        //here we could also have a post many to many
        //.post('/:id/friends', this.)

        //here we can have a delete that deletes by our many to many id
        //.delete('/:id/manytomany/:manytomanyId', this.deleteMany

    }

    //GET STUFF
    async getAllGallaxies(req, res, next) {
        try {
            let galaxies = await _repo.find({})
            return res.send(galaxies)
        } catch (error) { next(error) }
    }
    async getGallaxyById(req, res, next) {
        try {
            let galaxy = await _repo.findById(req.params.id)
            return res.send(galaxy)
        } catch (error) { next(error) }
    }
    //async for child repo
    // async get(req, res, next) {
    //     try {
    //         let photos = await _childRepo.find({ childPropId: req.params.id })
    //         return res.send()
    //     } catch (error) { next(error) }

    // }
    //here is many to many aysnc with .populate('array')
    // async getFriends(req, res, next) {
    //     try {
    //         let user = await _repo.findById(req.params.id).populate('')
    //         return res.send()
    //     } catch (error) { next(error) }
    // }







    //edit parent
    async editGalaxy(req, res, next) {

    }
    //create parent
    async createGalaxy(req, res, next) {
        try {
            let galaxy = await _repo.create(req.body)
            return res.status(201).send(galaxy)
        } catch (error) { next(error) }
    }

    //add many to many example would be friends 
    // async add(req, res, next) {
    //     try {
    //         //here we store to variables
    //         //first variable will be the parent example user
    //         //second variable will be who ever is our many to many example friendId
    //         let = await _repo.findById(req.params.id)
    //         let = req.body.manytomanyId
    //         //here is going to be our push manytomany onto our parent
    //         //example user.friends.puch(friendId)
    //         parent.manytomany.push(manytomanyId)
    //         parent.save(err => {
    //             if (err) {
    //                 return next(err)
    //             }
    //             return res.send(parent)
    //         })
    //     } catch (error) { next(error) }
    //}

    //here is the asyc for deleting parent
    async deleteGalaxy(req, res, next) {
        try {
            let galaxy = await _repo.findByIdAndDelete(req.params.id)
            return res.send("Successfully deleted")
        } catch (error) { next(error) }

    }

    //here is the asyc to delete manytomany ex friend
    //async delete(req, res, next) {

    //}
    defaultRoute(req, res, next) {
        res.status(404).send('No such route')
    }
}