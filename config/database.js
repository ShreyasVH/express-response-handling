const mongoose = require('mongoose');

async function connectDatabase() {
  try {
    await mongoose.connect('mongodb://' + process.env.MONGODB_IP + ':' + process.env.MONGODB_PORT + '/' + process.env.MONGODB_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

module.exports = connectDatabase;
