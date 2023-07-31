import { Router } from "express"
import { gameSchema } from "../schemas/game.schema.js"
import { createGame, getGames } from "../controllers/games.controllers.js"
import { validateSchema } from "../middlewares/validateSchema.midlleware.js"


const gamesRouter = Router()

gamesRouter.get("/games",  getGames)
gamesRouter.post("/games", validateSchema(gameSchema), createGame)


export default gamesRouter