//requiring express
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.send("<h1>Incorrect Route!</h1>")
});

//exporting router
module.exports = router;