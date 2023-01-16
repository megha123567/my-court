const express = require('express');

const {caseDetails, viewLawyer,appointmentview, caseView } = require('./controllers/casemasterController');

const router = express.Router();

router.post('/case/:id', caseDetails);
router.get('/view', viewLawyer);
router.get('/viewappointments', appointmentview );
router.get('/caseview', caseView);


module.exports = router;