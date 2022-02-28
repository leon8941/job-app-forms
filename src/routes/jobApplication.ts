import express from 'express'
import multer from 'multer'

import { IJobApplicationInterface } from '../dto/IJobApplication'
import { getJobs, getLocations, getHeardFroms, createJobApplication } from '../services'

const router = express.Router()
const upload = multer()

router.get('/jobs', (_, res) => {
  getJobs().then((dbResponse) => {
    res.status(200)
      .send(dbResponse)
  }).catch(() => {
    res.sendStatus(502)
  })
})

router.get('/locations', (_, res) => {
  getLocations().then((dbResponse) => {
    res.status(200)
      .send(dbResponse)
  }).catch(() => {
    res.sendStatus(502)
  })
})

router.get('/heardFroms', (_, res) => {
  try {
    const data = getHeardFroms()

    res.status(200)
      .send(data)
  } catch (_) {
    res.sendStatus(502)
  }
})

router.post('/resume', upload.single('file'), (_, res) => {
  res.sendStatus(200)
})

router.post('/submitJobApplication', async (req, res) =>  {
  const {
    firstName,
    lastName,
    email,
    contactNo,
    addressLine1,
    addressLine2,
    job,
    noOfYearExp,
    prefferedLocation,
    heardFrom,
    noticePeriod,
    fileName
  } : IJobApplicationInterface = req.body

  try {
    await createJobApplication({
      firstName,
      lastName,
      email,
      contactNo,
      addressLine1,
      addressLine2,
      job,
      noOfYearExp,
      prefferedLocation,
      heardFrom,
      noticePeriod,
      fileName
    })
    
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(304)
  }
})

export default router