/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { isEmpty } from 'lodash'

const Protocol = mongoose.model('Protocol')

class ProtocolController {
  create = async (request: Request, response: Response) => {
    const { name, where, price, method, date, owner, person } = request.body

    const protocol = await Protocol.create({
      name: name,
      where: where,
      price: price,
      method: method,
      date: date,
      owner: owner,
      person: person
    })

    return response.json(protocol)
  }
}

export default new ProtocolController()
