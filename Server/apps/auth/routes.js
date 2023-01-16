const controller = require('./controllers/authController');
const router = require('express').Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/update', controller.updateUser );
router.post('/lawyer', controller.lwayerRegister);
router.post('/casemaster', controller.casemasterRegister);
router.post('/verifyotp', controller.verifyOtp)


module.exports = router;