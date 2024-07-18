var express = require('express');
var router = express.Router();

// Define your API routes here
router.get('/', function(req, res, next) {
  res.send('API Home');
});

router.get('/users', function(req, res, next) {
  res.json({ message: 'API Users' });
});

module.exports = router; // Ensure this line exports the router object
