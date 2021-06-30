const express = require('express');
const router = express.Router();

const { requestRegistration, getRequestById, getAllRequests } = require('../controller');


router.post('/add', requestRegistration);
router.get('/:id', getRequestById);
router.get('/', getAllRequests);

module.exports = router;
