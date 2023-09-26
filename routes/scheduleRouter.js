const ScheduleController = require('../controllers/scheduleController');
const { authorizationAdmin, authorization } = require('../helpers/auth');

const router = require('express').Router();

router
  .get('/', ScheduleController.findAllSchedule)
  .use(authorization)
  .use(authorizationAdmin)
  .post('/', ScheduleController.createSchedule)
  .put('/:scheduleId', ScheduleController.updateSchedule)
  
module.exports = router;