import express from 'express'

import { IJobApplicationInterface } from '../dto/IJobApplication'
import { getJobs, getLocations, getHeardFroms, createJobApplication } from '../services'

const router = express.Router()

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

router.post('/submitJobApplication', (req, res) =>  {
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
  } : IJobApplicationInterface = req.body

  createJobApplication({
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
  }).then(() => {
    res.sendStatus(200)
  }).catch((error) => {
    console.log(error)
    res.sendStatus(304)
  })
})

export default router