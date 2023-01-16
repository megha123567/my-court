const { User, Appointment } = require("../../../data/model");
const ResponseModel = require("../../../utilities/responseModel");
const tokenHandler = require("../../../utilities/tokenHandler")


// Get all lawyers
module.exports.getAll = async (req, res) => {
    // const id = req.data.id
    const lawyers = await User.findAll({
        where: {
            roleId: 3
        }
    })
    res.json(new ResponseModel(lawyers));
}


//profile
module.exports.profile=async (req,res)=>{
    const {id}=req.body;
    const token = tokenHandler.verifyToken(req.token);
    
    var userprofile = await User.findOne({
        where: {
            id: token.id
        }
    })
    if(!userprofile)
    {
        return res.json(new ResponseModel(null,null,["no lawyer found"]))
    }
    res.json(new ResponseModel(userprofile))
}


//Lawyer search
module.exports.lawyerSearch = async (req, res) => {
    const { specialization } = req.body;

    var lawyer = await User.findAll(
        {
            where:
            {
                specialization: specialization
            }
        });
    if (!lawyer) {
        return res.json(new ResponseModel(null, null, ['No Lawyer found']));
    }
    res.json(new ResponseModel(lawyer));
}



// Create Appointment
module.exports.appointment = async (req, res) => {
    const { casedesc, date, time, status} = req.body;
    const token = tokenHandler.verifyToken(req.token);
    
    const appointment = await Appointment.create({
        casedesc: casedesc,
        date: date,
        time: time,
        lawyer: req.params.id,
        customerId: token.id,
        status: 'pending'
    })
    res.json(new ResponseModel(appointment));

}

// Update appointment
module.exports.updateAppointment = async (req, res, next) => {
    const {id } = req.body;
    var appointment = await Appointment.findByPk(id);
    await appointment.update(
        {
           status:"approved"
        }
    )
    if (!appointment) {
        return res.json(new ResponseModel(null, null, ['status Not Updated']));
    }
    res.json(new ResponseModel(appointment));
}


