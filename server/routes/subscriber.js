const express = require('express');
const router = express.Router();

const { addSubscriber, getSubscriberById, getAllSubscribers } = require('../controller');

router.post('/add', addSubscriber);
router.get('/:id', getSubscriberById);
router.get('/', getAllSubscribers);

module.exports = router;