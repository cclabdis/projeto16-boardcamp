import joi from "joi"

export const customerSchema = joi.object({
    name: joi.string().allow(""),
    phone: joi.number().required(),
    cpf: joi.string().regex(/^\d{11}$/).required(),
    birthday: joi.date().required()

})

// ```jsx
// {
//   id: 1, 
//   name: 'João Alfredo',
//   phone: '21998899222',
//   cpf: '01234567890',
//   birthday: '1992-10-25'
// }
// ```