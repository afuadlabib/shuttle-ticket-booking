'use strict';
let user = require('../db/user.json')
let driver = require('../db/driver.json')
let seat = require('../db/seat.json')
let armada = require('../db/armada.json')
let schedule = require('../db/schedule.json')
const {v4: uuidv4} = require('uuid');
const { hashingPassword } = require('../helpers/bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    user.forEach((e)=>{
      // e.id = uuidv4()
      e.password = hashingPassword(e.password)
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    console.log(user);
    driver.forEach((e)=>{
      // e.id = uuidv4()
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    console.log(driver);
    seat.forEach((e)=>{
      // e.id = uuidv4()
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    console.log(seat);
    armada.forEach((e)=>{
      // e.id = uuidv4()
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    console.log(armada);
    schedule.forEach((e)=>{
      // e.id = uuidv4()
      e.createdAt = new Date()
      e.updatedAt = new Date()
    })
    console.log(schedule);

    await queryInterface.bulkInsert("Users",user)
    await queryInterface.bulkInsert("Drivers",driver)
    await queryInterface.bulkInsert("Seats",seat)
    await queryInterface.bulkInsert("Armadas",armada)
    await queryInterface.bulkInsert("Schedules",schedule)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users",null)
    await queryInterface.bulkDelete("Drivers",null)
    await queryInterface.bulkDelete("Seats",null)
    await queryInterface.bulkDelete("Armadas",null)
    await queryInterface.bulkDelete("Schedules",null)
  }
};
