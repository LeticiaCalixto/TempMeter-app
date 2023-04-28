import {Router} from 'express'
import TermoController from './controllers/TermoController'

const routes = Router()
routes.get('/users', TermoController.index)

export default routes