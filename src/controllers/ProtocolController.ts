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

  list = async (request: Request, response: Response) => {
    try {
      const { person } = request.body

      if (isEmpty(person)) throw response.json('Is missing person').status(404)

      const dataProtocol = await Protocol.find({ person })

      if (isEmpty(dataProtocol)) throw response.json('Not found person').status(404)

      return response.json(dataProtocol)
    } catch (error) {
      console.log('Error')
    }
  }
}

export default new ProtocolController()
