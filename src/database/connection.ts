import mongoose from 'mongoose'

function connectionDatabase () {
  mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection

  db.on('error', (error) => console.error(error))

  db.once('open', () => console.log('🎲 Connected to the database!'))
}

export default connectionDatabase
