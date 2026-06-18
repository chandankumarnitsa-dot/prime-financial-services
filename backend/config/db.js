const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Options like useNewUrlParser and useUnifiedTopology are no longer needed in Mongoose 6+
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    console.error('Please make sure your current IP address is whitelisted in MongoDB Atlas.');
    // We remove process.exit(1) so the server can still start and return 500 errors to the frontend.
  }
};

module.exports = connectDB;
