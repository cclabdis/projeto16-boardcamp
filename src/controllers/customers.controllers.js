import { db } from "../database/database.config.js"

export async function allCustomers(req, res) {
        try {
            const customers = await db.query(`SELECT * FROM customers;`)
            res.send(customers.rows)
        } catch (err) {
            res.status(500).send(err.message)
        }
    }
    
export async function newCustomer(req, res) {
    const { name, phone, cpf, birthday } = req.body

    try {

        const { rows: client } = await db.query(`
            SELECT * FROM customers WHERE cpf = ( $1 )
        `, [cpf])

        if (client.length > 0) return res.sendStatus(409)

        await db.query(`
            INSERT INTO customers ( name, phone, cpf, birthday ) VALUES ( $1, $2, $3, $4 )
        `, [name, phone, cpf, birthday])
        res.sendStatus(201)

     } catch (err) {
        res.status(500).send(err.message)
    }
}
