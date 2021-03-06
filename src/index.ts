import express from 'express'
import cors from 'cors'

import jobApplications from './routes/jobApplication'

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use('/', jobApplications)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})