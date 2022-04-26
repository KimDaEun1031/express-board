const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connectionMongo = mongoose.connection;

const handleConnection = () => {
  console.log('✅ DB is connected!');
};

const handleError = (err) => {
  console.log(`Error on DB: ${err}`);
};

connectionMongo.once('open', handleConnection);
connectionMongo.on('error', handleError);
