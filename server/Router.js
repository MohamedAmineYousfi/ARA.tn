var announceRouter = require('express').Router();
var Controller = require('./Controller')

announceRouter.route('/announce/')
.post(Controller.createOne)
.get(Controller.retrieve)


announceRouter.route('/announce/:id')
.patch(Controller.updateViews)
.put(Controller.changeYourPost)
.delete(Controller.deleteOne)


announceRouter.route('/')
.post(Controller.check)

announceRouter.route('/signup/')
.post(Controller.findOne)

module.exports = announceRouter ;