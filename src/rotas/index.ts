import { Router  } from "express"
import * as HomeController from '../controllers/paginasController'
import * as UsuarioController from '../controllers/usuarioController'




const router = Router()

router.get('/', HomeController.home)
router.get('/cadastro', HomeController.criarConta)
router.post('/novoUsuario', UsuarioController.novoUsuario)
router.get('/login', HomeController.login)
router.post('/infoPessoal', HomeController.infoPessoal)
router.post('/userValidator', UsuarioController.userValidator)



export default router