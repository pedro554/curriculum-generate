import {Request, Response} from 'express'
import {User} from '../models/Usuario'


export const novoUsuario = async (req: Request, res: Response) => {
    console.log('informações', req.body)
    let [usuario, created] = await User.findOrCreate({
        where: {usuario: req.body.user},
        defaults: {
            senha: req.body.password
        }
    })
    if(created === false) {
        res.redirect('/cadastro')
    } else {
        res.redirect('/login')
    }
}

export const userValidator = async (req: Request, res: Response) => {
    let usuario = await User.findOne({
        where: {
            usuario: req.body.user,
            senha: req.body.password
        }
    })
    if(usuario) {
        res.render('pages/infoPessoal', {
            usuario: req.body.user
        })
    } else {
        res.redirect('/login')
    }
}