import {Router} from 'express'
import TermoController from './controllers/TermoController'

const routes = Router()
routes.get('/temps', TermoController.index)
routes.post('/temps', TermoController.store)

export default routes