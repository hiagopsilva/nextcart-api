import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate'

const ProtocolSchema = new mongoose.Schema({
  protocolo: {
    type: String,
    require: true
  },
  apresentante: {
    type: String,
    require: true
  },
  tipo: {
    type: String,
    require: true
  },
  imagem: {
    type: String,
    require: true
  },
  entrada: {
    type: Number,
    require: true
  },
  vencimento: {
    type: Number,
    require: true
  },
  CreatedAt: {
    type: Date,
    default: Date.now
  }
})

ProtocolSchema.plugin(mongoosePaginate)

mongoose.model('Protocol', ProtocolSchema)
