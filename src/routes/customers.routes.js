import { Router } from "express"
import { allCustomers, customerByID, newCustomer } from "../controllers/customers.controllers.js"
import { customerSchema } from "../schemas/customers.schema.js"
import { validateSchema } from "../middlewares/validateSchema.midlleware.js"


const customerRouter = Router()

customerRouter.get("/customers",  allCustomers)
customerRouter.get("/customers/:id", customerByID)
customerRouter.post("/customers", validateSchema(customerSchema), newCustomer)
// customerRouter.put("/customers/:id",  createGame)


export default customerRouter