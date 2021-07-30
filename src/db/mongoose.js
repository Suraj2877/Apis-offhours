const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/admin-hire-tool', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(async res => {
    console.log("Database Connected");
  });