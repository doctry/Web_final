function connectMongo() {
    require('dotenv-defaults').config()

    const mongoose = require('mongoose')

    if (!process.env.MONGO_URL) {
        console.log(MONGO_URL)
        console.error('Missing MONGO_URL!!!')
        process.exit(1)
    }

    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    const db = mongoose.connection

    db.once('open',() => {
        console.log('Connected to MongoDB!')
    })

    return;
}

const Task = require('./models/task')

export {connectMongo, Task}