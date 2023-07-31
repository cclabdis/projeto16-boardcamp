import { db } from "../database/database.config.js"

export async function getGames(req, res) {
    try {
        const games = await db.query(`SELECT * FROM games;`)
        res.send(games.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}


export async function createGame () {
    const { name, image, stockTotal, pricePerDay } = req.body
    try{

        

        if (stockTotal <= 0 || pricePerDay <= 0) {
            res.sendStatus(400)
          }
      
          // Verificar se o nome do jogo já existe na tabela
          const existingGame = await db.query('SELECT 1 FROM games WHERE name = $1', [name]);
          if (existingGame.rows.length > 0) {
            res.sendStatus(409)
          }
      
          // Inserir o novo jogo na tabela
          const queryText = 'INSERT INTO games (name, image, stockTotal, pricePerDay) VALUES ($1, $2, $3, $4)';
          await db.query(queryText, [name, image, stockTotal, pricePerDay]);
      
          res.sendStatus(201)
     

    }catch(err) {
        res.status(500).send(err.message)
    }
}




  

