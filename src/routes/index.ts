import { Router } from 'express'

import ProtocolController from '@controllers/ProtocolController'

const routes = Router()

routes.post('/create', ProtocolController.create)
routes.post('/update/:id', ProtocolController.update)
routes.get('/get/:id', ProtocolController.get)
routes.get('/list', ProtocolController.list)

export default routes
