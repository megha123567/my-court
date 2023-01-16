const {Case, User, Appointment} = require("../../../data/model");
const ResponseModel = require("../../../utilities/responseModel");
const tokenHandler = require("../../../utilities/tokenHandler");

//Create case 
module.exports.caseDetails = async(req, res)=>{
    const {caseno,casedesc,casetype} = req.body;
    // const token = tokenHandler.verifyToken(req.token);
    const params = req.params.id

    const caseDetails = await Case.create({
        caseno: caseno,
        casedesc:casedesc,
        casetype:casetype,
        paymentstatus:'paid',
        appointmentId:params
    })
    res.json(new ResponseModel(caseDetails));
}


// View lawyer by casemaster
module.exports.viewLawyer = async(req, res)=>{
    const token = tokenHandler.verifyToken(req.token);
    var viewlawyer = await User.findOne({
        where: {
            id: token.lawyer
        }
    })
  
    if(!viewlawyer)
    {
        return res.json(new ResponseModel(null,null,["no lawyer found"]))
    }
    res.json(new ResponseModel(viewlawyer))
}

//view appointments
module.exports.appointmentview = async (req, res) =>{
    const token = tokenHandler.verifyToken(req.token);
    var appointment = await Appointment.findAll(
        {
            where:
            {
                lawyer: token.lawyer
            }
        });
        if(!appointment)
        {
            return res.json(new ResponseModel(null,null,["no "]))
        }
        res.json(new ResponseModel(appointment))
    }


//view case details
module.exports.caseDetailsView = async(req, res)=>{
    
}
 

// Case view
module.exports.caseView = async(req, res)=>{
    const {id}= req.body;
    var caseview = await Case.findAll({
       include: Appointment
    });
    if(!caseview){
        return res.json(new ResponseModel(null, null, ['No user Found']))
    }
    res.json(new ResponseModel(caseview));
} 