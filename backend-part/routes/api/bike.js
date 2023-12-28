const express = require('express');
const { validateBody, isValidId } = require('../../middlewares');

const { schemas } = require('../../models/bike');

const {
  getAllBike,
  updateStats,
  addBike,
  removeBike,
} = require('../../controllers/bike');

const router = express.Router();

router.get('/', getAllBike);

router.post('/add', validateBody(schemas.bikesSchema), addBike);

router.patch('/:_id/stats', validateBody(schemas.statsSchema), updateStats);

router.delete('/:_id', isValidId, removeBike);

module.exports = router;
