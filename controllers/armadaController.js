const { Armada, Seat } = require('../models');
class ArmadaController {
  static async createArmada(req, res, next) {
    try {
      const { id, name, plate_number, color, seat_id } = await Armada.create({
        ...req.body,
      });
      res.status(201).json({ id, name, plate_number, color, seat_id });
    } catch (error) {
      next(error);
    }
  }
  static async findAllArmada(req, res, next) {
    try {
      const armadas = await Armada.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt'],
        },
        include: {
          model: Seat,
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        }
      });
      res.status(200).json(armadas);
    } catch (error) {
      next(error);
    }
  }
  static async updateArmada(req, res, next) {
    try {
      const findArmada = await Armada.findByPk(req.params.armadaId);
      if (!findArmada) {
        throw { name: 'not_found' };
      }
      const armadas = await Armada.update(
        { ...req.body },
        {
          where: { id: req.params.armadaId },
        }
      );
      if (armadas) {
        let message = `success update ${findArmada.name}`;
        res.status(200).json({ message });
      } else {
        throw { name: 'error' };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ArmadaController;
