const { Schedule, Driver, Armada, User, Seat } = require('../models');
const {Op} = require('sequelize')
class ScheduleController {
  static async createSchedule(req, res, next) {
    try {
      const { time, origin, destination, armada_id, driver_id } =
        await Schedule.create({ ...req.body });
      res.status(201).json({ time, origin, destination, armada_id, driver_id });
    } catch (error) {
      next(error);
    }
  }
  static async findAllSchedule(req, res, next) {
    try {
      const { destination, origin } = req.query;
      const schedules = await Schedule.findAll({
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'driver_id', 'armada_id'],
        },
        where: { [Op.and]:[{destination},{ origin}]},
        include: [
          {
            model: Driver,
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'user_id'],
            },
            include: {
              model: User,
              attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'role'],
              },
            },
          },
          {
            model: Armada,
            attributes: {
              exclude: ['createdAt', 'updatedAt', 'seat_id'],
            },
            include: {
              model: Seat,
              attributes: {
                exclude: ['createdAt', 'updatedAt'],
              },
            },
          },
        ],
      });
      res.status(200).json(schedules);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
  static async updateSchedule(req, res, next) {
    try {
      const findSchedule = await Schedule.findByPk(req.params.scheduleId);
      if (!findSchedule) {
        throw { name: 'not_found' };
      }
      const scheduleUpdate = await Schedule.update(
        { ...req.body },
        { where: { id: req.params.scheduleId } }
      );
      if (!scheduleUpdate) {
        throw { name: 'error' };
      } else {
        let message = `success update schedule ${findSchedule.time}`;
        res.status(200).json({ message });
      }
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ScheduleController;
