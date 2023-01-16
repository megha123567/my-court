const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const cors = require('cors');
const authMiddleware = require('../Server/middleware/authMiddleware');
const authRoutes = require('./apps/auth/routes');
const userRoutes = require('./apps/user/routes');
const adminRoutes = require('./apps/admin/routes');
const casemasterRoutes = require('./apps/casemaster/routes');

dotEnv.config();
const app = new express();
app.use(cors({origin: '*'}));

app.use(authMiddleware);

app.use(bodyParser.json({inflate: true}));

app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
app.use('/casemaster', casemasterRoutes);


app.listen(80);
