import { db } from "../database/database.config.js"
import dayjs from "dayjs"


function localClient(local) {
    return local.rows.map(customer => ({
        ...customer,
        birthday: dayjs(customer.birthday).format('YYYY-MM-DD'),
    })
    )
}


export async function allCustomers(req, res) {
    try {
        const {rows: customers } = await db.query(`SELECT id, name, phone, cpf, TO_CHAR(birthday, 'YYYY-MM-DD') AS birthday FROM customers`)
        res.send(customers)
      
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

export async function customerByID(req, res) {
    const { id } = req.params
    
    try {
        let {rows: clientId } = await db.query(`
            SELECT * FROM customers WHERE id = ( $1 )
        `, [id])

        if (clientId.length === 0) return res.sendStatus(404)
        clientId= localClient(clientId)

        res.send(clientId[0])

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function updateCustomer(req, res) {
    const { id } = req.params
    const { name, phone, cpf, birthday } = req.body

    try {
        const {rows: client} = await db.query(`SELECT * FROM customers WHERE id=$1`, [id])
        if (client.length === 0)  return res.sendStatus(404)

        const {rows: cpfClient } = await db.query(`SELECT * FROM customers WHERE cpf = $1 AND id <> $2;`, [cpf, id])
        if (cpfClient.length > 0) return res.sendStatus(409)
  
        await db.query(`
            UPDATE customers
            SET name = $1, phone = $2, cpf = $3, birthday = $4 
            WHERE id=$5
        `, [name, phone, cpf, birthday, id])
        res.sendStatus(200)

    } catch (err) {
        res.status(500).send(err.message)
    }
}