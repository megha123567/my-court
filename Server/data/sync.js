const {User, Role,  Case, Appointment} = require('./model');
Role.sync({alter: true});
User.sync({alter: true});
Appointment.sync({alter: true});
Case.sync({alter: true});
