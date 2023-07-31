import { Router } from "express"
import gamesRouter from "./games.routes.js"
import customerRouter from "./customers.routes.js"


const router = Router()

router.use(gamesRouter)
router.use(customerRouter)
// router.use(lalalal)

export default router