const TicketPdf = require('../controllers/ticket');
const TicketController = require('../controllers/ticketController');
const { authorizationAdmin, authorization } = require('../helpers/auth');

const router = require('express').Router();

router
  .post('/', TicketController.createTicket)
  .get('/', TicketController.findAllTicket)
  .get('/generate-ticket', TicketPdf.generatePdf)
  .post('/generate-midtrans', TicketController.generateMidrans)
  .use(authorization)
  .use(authorizationAdmin)
  .put('/:ticketId', TicketController.updateTicket);

module.exports = router;
