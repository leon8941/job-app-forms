import express from 'express'

import jobApplications from './routes/jobApplication'

const app = express()
const port = 3001

app.use(express.json())
app.use('/', jobApplications)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})