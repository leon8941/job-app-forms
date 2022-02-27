import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getLocations = () => prisma.location.findMany()
