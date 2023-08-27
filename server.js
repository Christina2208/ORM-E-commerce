//importing connections
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

//calling express & establishing the PORT number
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the db, then turn on the server & console log message
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => 
    console.log(`App is listening on port ${PORT}!`));
});