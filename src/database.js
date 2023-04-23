const mongoose = require('mongoose');

const URI = 'mongodb+srv://Yonatansuarez78:1061530108@cluster0.8o1fglw.mongodb.net/mern?retryWrites=true&w=majority';


mongoose.connect(URI)
  .then(db => console.log('Db is connected'))
  .catch(error => console.error(error));

module.exports = mongoose;
