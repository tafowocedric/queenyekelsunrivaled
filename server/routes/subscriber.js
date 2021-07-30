const express = require('express');
const router = express.Router();

const { addSubscriber, getSubscriberById, getAllSubscribers, forwardMail } = require('../controller');

router.post('/add', addSubscriber);
router.get('/:id', getSubscriberById);
router.get('/', getAllSubscribers);
router.post('/forwardmail', forwardMail);

module.exports = router;
