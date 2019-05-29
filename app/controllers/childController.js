import ChildService from '../services/childService';
import express from 'express'


let _service = new childService()
let _repo = _service.repository

export default class ChildController {
    constructor() {
        this.router = express.Router()
            .get('', this.getAll)
            .get('/:id', this.get)
            .put('/:id', this.edit)
            .post('', this.create)
            .delete('/:id', this.delete)
            .use('*', this.defaultRoute)
    }
    async getAlls(req, res, next) {
        try {
            let = await _repo.find({})
            return res.send()
        } catch (error) { next(error) }
    }
    async getById(req, res, next) {
        try {
            let = await _repo.findById(req.params.id)
            return res.send()
        } catch (error) { next(error) }
    }
    async edit(req, res, next) {

    }
    async create(req, res, next) {
        try {
            let photo = await _repo.create(req.body)
            return res.status(201).send()
        } catch (error) { next(error) }
    }
    async deletePhoto(req, res, next) {

    }
    defaultRoute(req, res, next) {

    }
}