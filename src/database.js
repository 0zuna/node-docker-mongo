const mongoose = require('mongoose')
mongoose.connect('mongodb://my-mongo/mydatabase')
.then(db=>console.log('db is conected to ',db.connection.host))
.catch(err=>console.log(err))
