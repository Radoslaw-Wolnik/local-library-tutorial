import express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('API Home');
});

router.get('/users', function(req, res, next) {
  res.json({ message: 'API Users' });
});

export default router;