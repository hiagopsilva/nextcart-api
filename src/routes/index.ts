import { Router } from 'express'

import ProtocolController from '@controllers/ProtocolController'

const routes = Router()

routes.post('/create', ProtocolController.create)
routes.post('/update', ProtocolController.update)
routes.get('/list', ProtocolController.list)

export default routes
