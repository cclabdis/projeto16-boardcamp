import { Router } from "express"


const customerRouter = Router()

customerRouter.get("/customers",  getGames)
// customerRouter.get("/customers/:id", createGame)
// customerRouter.post("/customers/", validateSchema(gameSchema), createGame)
// customerRouter.put("/customers/:id",  createGame)


export default customerRouter