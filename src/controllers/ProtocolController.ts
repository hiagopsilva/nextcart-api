/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { isEmpty } from 'lodash'

const Protocol = mongoose.model('Protocol')

class ProtocolController {
  create = async (request: Request, response: Response) => {
    const protocol = await Protocol.create(request.body)

    return response.json(protocol)
  }

  list = async (request: Request, response: Response) => {
    try {
      const dataProtocol = await Protocol.find()

      return response.json(dataProtocol)
    } catch (error) {
      console.log('Error', error)
      return response.status(404)
    }
  }

  get = async (request: Request, response: Response) => {
    try {
      const dataProtocol = await Protocol.findById({ _id: request.params.id })

      return response.json(dataProtocol)
    } catch (error) {
      console.log('Error', error)

      return response.status(404)
    }
  }

  update = async (request: Request, response: Response) => {
    try {
      const dataProtocol = await Protocol.findByIdAndUpdate(request.params.id, request.body, { new: true })

      return response.json(dataProtocol)
    } catch (error) {
      console.log('Error')
      return response.status(404)
    }
  }
}

export default new ProtocolController()
