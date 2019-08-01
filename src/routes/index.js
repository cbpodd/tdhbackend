const express = require('express');

const { getAll, getDH } = require('../apis');
const { getDate } = require('../middleware/date');

const router = express.Router({ mergeParams: true });

// req.date has a date object of the date in question
router.use(getDate);

router.get('/', getAll);

router.get('/:dhName', getDH);

module.exports = router;
