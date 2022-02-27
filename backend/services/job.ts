import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getJobs = () => prisma.job.findMany()
