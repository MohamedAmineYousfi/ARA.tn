var announceRouter = require('express').Router();
var Controller = require('./Controller')

announceRouter.route('/announce/').post(Controller.createOne)
announceRouter.route('/announce/').get(Controller.retrieve)
announceRouter.route('/announce/:id').post(Controller.updateOne)
announceRouter.route('/announce/:id').delete(Controller.deleteOne)
announceRouter.route('/').post(Controller.check)
announceRouter.route('/signup/').post(Controller.findOne)

module.exports = announceRouter ;