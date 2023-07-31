import joi from "joi"

export const gameSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().trim().uri().required(),
    stockTotal: joi.number().min(0).positive().integer().required(),
    pricePerDay: joi.number().min(0).integer().required()

})