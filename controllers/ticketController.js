const { Ticket, Schedule } = require('../models')
const midtransClient = require("midtrans-client");

class TicketController{
    static async createTicket(req, res, next){
        try {
            const date = new Date()
            const milisecond = date.getTime()
            console.log(milisecond);
            const {id,username, schedule_id, id_ticket} = await Ticket.create({...req.body, id_ticket: `SHUTTLE-${milisecond}`})
            res.status(201).json({id,username, schedule_id, id_ticket})
        } catch (error) {
            next(error)
        }
    }
    static async findAllTicket(req, res, next){
        try {
            const tickets = await Ticket.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt","schedule_id"]
                },
                include:{
                    model: Schedule,
                    attributes:{
                        exclude : ["createdAt", "updatedAt",]
                    }
                }
            })
            res.status(200).json(tickets)
        } catch (error) {
            next(error)
        }
    }
    static async updateTicket(req, res, next){
        try {
            const findTicket = await Ticket.findByPk(req.params.ticketId)
            if(!findTicket){
                throw {name: "not_found"}
            }
            const tickets = await Ticket.update({...req.body},{where: {id: req.params.ticketId}})
            if(!tickets){
                throw {name: "error"}
            }
            let message = `success update ${findTicket.id}`
            res.status(200).json({message})
        } catch (error) {
            next(error)
        }
    }
    static async generateMidrans(req, res, next){
        try {
            const { total, username } = req.body
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: process.env.MIDTRANS_SERVER_KEY,
              });
              let unique = new Date()
              unique = unique.getTime()
              let parameter = {
                transaction_details: {
                  order_id:`Transaction-${unique}`,
                  gross_amount: total,
                },
                credit_card: {
                  secure: true,
                },
                customer_details: {
                    username
                },
              };
              const midransToken = await snap.createTransaction(parameter)
              res.status(201).json(midransToken)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
}

module.exports = TicketController