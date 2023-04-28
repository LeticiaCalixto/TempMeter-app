import {Request, Response} from 'express';
import Termo from '../schemas/Termo'

class TermoController {
    public async index (req: Request, res: Response): Promise<Response>{
        const temps = await Termo.find()

        return res.json(temps)
    }
}
export default new TermoController()