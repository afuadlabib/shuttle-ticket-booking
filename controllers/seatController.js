const { Seat } = require('../models');

class SeatController {
  static async createSeat(req, res, next) {
    try {
      const { id, name } = await Seat.create({ ...req.body });
      res.status(201).json({ id, name });
    } catch (error) {
      next(error);
    }
  }
  static async findAllSeat(req, res, next) {
    try {
      const seats = await Seat.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      res.status(200).json(seats);
    } catch (error) {
      next(error);
    }
  }
  static async updateSeat(req, res, next) {
    try {
      const findUpdate = await Seat.findByPk(req.params.seatId);
      if (!findUpdate) {
        throw { name: 'not_found' };
      }
      const seat = await Seat.update(
        { ...req.body },
        { where: { id: findUpdate.id } }
      );
      if (seat) {
        let message = `success update seat ${findUpdate.name}`;
        res.status(200).json({ message });
      } else {
        throw { name: 'error' };
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = SeatController;
