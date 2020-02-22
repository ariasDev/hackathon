const mongoose = require('mongoose');

exports.conect = async () => {
  await mongoose.connect(process.env.MONGO_ROUTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
  })
  .then(resolve => {
    console.log('db connect');
  })
  .catch(reject => {
    console.log('db error');
  })
}