import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './models/Protocol'

import routes from '@routes/index'
import connectionDatabase from '@database/connection'

const app = express()

connectionDatabase()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(routes)

const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`🖥  Server started in port: ${port}`)
})
