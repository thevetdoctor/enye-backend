const express = require('express');
const app = express();
const router = require('./routes/index');

// Declare PORT
const PORT = process.env.PORT || 5000;

// Route handling
app.use('/api', router);

app.get('/', (req, res) => {
    res
    .status(200)
    .json({message: 'Welcome to Enye 5.0: Backend API'});
}); 

// App listen to port
app.listen(PORT, () => console.log(`Server started @ port :${PORT}`));

module.exports = app;