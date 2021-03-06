const Position = require('../models/Position');
const errorHandler = require('../utils/errorHandler')

module.exports.getByCategoryId = async function (req, res) {
    try {
        const position = await Position.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(position)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.create = function (req, res) {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.remove = function (req, res) {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.update = function (req, res) {
    try {

    } catch (error) {
        errorHandler(res, error)
    }
}