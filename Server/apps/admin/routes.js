const express = require ('express');

const {getAllClient, getAllCasemaster, getAllLawyer, deleteUser} = require('./controllers/adminController');

const router = express.Router();

router.get('/client', getAllClient);
router.get('/casemaster', getAllCasemaster);
router.get('/lawyer', getAllLawyer);
router.get('/deleteuser/:id', deleteUser);



module.exports = router;