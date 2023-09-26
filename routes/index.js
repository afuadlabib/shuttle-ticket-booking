const router = require('express').Router();
const users = require('./userRouter');
const errorHandler = require('../helpers/errorHandlers');
const armadas = require('./armadaRouter');
const seats = require('./seatRouter');
const schedules = require('./scheduleRouter')
const tickets = require('./ticketRouter')
const { authorization } = require('../helpers/auth');

router
  .use('/users', users)
  .use('/tickets', tickets)
  .use('/schedules', schedules)
  .use(authorization)
  .use('/seats', seats)
  .use('/armadas', armadas)
  .use(errorHandler);

module.exports = router;
