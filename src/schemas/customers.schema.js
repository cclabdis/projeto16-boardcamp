import joi from "joi"

export const customerSchema = joi.object({
    name: joi.string().allow("").required(),
    phone: joi.number().required(),
    cpf: joi.string().regex(/^\d{11}$/).required(),
    birthday: joi.date().required()

})

