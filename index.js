
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/index');
const app = express();
// Middleware
const sequelize = require('./config/database')
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', routes);

app.get('/ping', (req, res) => {
    res.send('Hey, this is my API');
  });

app.use((err, req, res, next) => {
    // logError(err)
    console.log(err);
    res.status(500).json({ message: 'Internal Server Error',error:err });
  });

// sequelize.sync({ alter: true })
//   .then(() => console.log('Database tables created'))
//   .catch((error) => console.error('Error creating database tables:', error));

app.listen(4000, () => {
  console.log('Server listening on port 3000');
});
