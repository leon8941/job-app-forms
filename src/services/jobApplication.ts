import { PrismaClient } from '@prisma/client'

import { IJobApplicationInterface } from '../dto/IJobApplication'

const prisma = new PrismaClient()

export const createJobApplication = async (payload: IJobApplicationInterface) => {
  const {
    email,
    firstName,
    lastName,
    noOfYearExp,
    noticePeriod,
    contactNo,
    addressLine1,
    addressLine2,
    heardFrom,
    prefferedLocation,
    job,
  } = payload

  // console.log('payload', payload)

  const result = await prisma.jobApplication.create({
    data: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      noOfYearExp: noOfYearExp,
      noticePeriod: noticePeriod,
      contactNo: contactNo,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      job: {
        connect: {
          id: parseInt(job)
        }
      },
      location: {
        connect: {
          id: parseInt(prefferedLocation)
        }
      },
      heardFrom: heardFrom
    }
  })

  return result
}
