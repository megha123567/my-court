const express = require('express');

const {getAll, appointment, lawyerSearch, profile, updateAppointment} = require('./controllers/userController');

const router = express.Router();

router.get('/lawyer', getAll);
router.post('/appointment/:id', appointment);
router.post('/search', lawyerSearch);
router.get('/profile', profile);
router.post('/appointment/update', updateAppointment);


module.exports = router;