import express, { Request, Response } from 'express'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'
import rotas from './rotas'


dotenv.config()

const server = express()
server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}))

server.use(rotas)

server.listen(process.env.PORT)