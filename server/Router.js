var announceRouter = require('express').Router();
var Controller = require('./Controller')

announceRouter.route('/announce/').post(Controller.createOne)
announceRouter.route('/announce/').get(Controller.retrieve)
announceRouter.route('/announce/:id').patch(Controller.updateOne)
announceRouter.route('/announce/:id').delete(Controller.deleteOne)
announceRouter.route('/').post(Controller.check)

module.exports = announceRouter ;