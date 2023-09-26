const SeatController = require('../controllers/seatController');
const { authorizationAdmin } = require('../helpers/auth');

const router = require('express').Router();

router
  .get('/', SeatController.findAllSeat)
  .post('/', authorizationAdmin, SeatController.createSeat)
  .put('/:seatId', authorizationAdmin, SeatController.updateSeat);

module.exports = router;
