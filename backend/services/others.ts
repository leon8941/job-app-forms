import { HeardFrom } from '@prisma/client'
import _ from 'lodash'

export const getHeardFroms = () => Object.keys(HeardFrom).map(data => ({
    key: data,
    name: _.capitalize(data.replace('_', ' '))
  }))