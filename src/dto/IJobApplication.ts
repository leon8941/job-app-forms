import { HeardFrom } from '@prisma/client'

export interface IJobApplicationInterface {
  firstName: string,
  lastName: string,
  email: string,
  contactNo: string,
  addressLine1: string,
  addressLine2: string,
  job: string,
  noOfYearExp: number,
  prefferedLocation: string,
  heardFrom: HeardFrom,
  noticePeriod: number,
  file?: File,
}