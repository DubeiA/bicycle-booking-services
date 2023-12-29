const app = require('./app');
const mongoose = require('mongoose');
const { DB_HOST } = process.env;

// DB_HOST = mongodb+srv://myusername:mypassword@myserver.mongodb.com/mydatabase?retryWrites=true&w=majority

mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(8080, () => {
      console.log('Database connection successful');
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });
