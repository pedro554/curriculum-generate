import { Request, Response } from 'express'


export const home = (req: Request, res: Response) => {
    res.render('pages/index')
}

export const criarConta = (req: Request, res: Response) => {
    res.render('pages/cadastro')
}

export const login = (req: Request, res: Response) => {
    res.render('pages/entrar')
}

export const infoPessoal = (req: Request, res: Response) => {
    res.render('pages/infoPessoal')
}