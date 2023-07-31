import joi from "joi"

export const gameSchema = joi.object({
    name: joi.string(),
    image: joi.string().trim().uri().required(),
    stockTotal: joi.number().positive().integer().required(),
    pricePerDay: joi.number().positive().integer().required()

})