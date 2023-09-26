const ArmadaController = require('../controllers/armadaController');
const { authorizationAdmin } = require('../helpers/auth');

const router = require('express').Router();

router
  .get('/', ArmadaController.findAllArmada)
  .post('/', authorizationAdmin, ArmadaController.createArmada)
  .put('/:armadaId', authorizationAdmin, ArmadaController.updateArmada);

module.exports = router;
