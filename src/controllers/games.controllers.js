import { db } from "../database/database.config.js"

export async function getGames(req, res) {
    try {
        const {rows: games } = await db.query(`SELECT * FROM games;`)
        res.send(games)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


export async function createGame (req, res) {
    const { name, image, stockTotal, pricePerDay } = req.body
    
        try {
          const {rows: existingGame } = await db.query('SELECT 1 FROM games WHERE name = $1', [name]);
          if (existingGame.length > 0) {
            res.sendStatus(409)
          }
      
          const queryText = 'INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)';
          await db.query(queryText, [name, image, stockTotal, pricePerDay]);
          res.sendStatus(201)

    }catch(err) {
        res.status(500).send(err.message)
    }
}




  

