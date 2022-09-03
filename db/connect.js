const mongoose = require('mongoose')

const connectDB = (url) =>{
    return mongoose.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB
// const connectDB = (url) =>{
//     return mongoose.connect(connectionString)
// }

// mongoose.connect(connectionString).then(()=>console.log('Connected to DB...')).catch((err)=>console.log(err))

