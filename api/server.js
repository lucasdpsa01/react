import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.use(cors())

const users = []

app.post('/sugestoes', async (req, res) => {

    await prisma.user.create({
        data: {
            name: req.body.name,
            sugestion: req.body.sugestion
        }
    })

    res.status(201).json(req.body)
})

app.get('/sugestoes', (req, res) => {
    res.status(200).json(users)
})
app.listen(3000)