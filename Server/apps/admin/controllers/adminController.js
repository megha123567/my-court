const {User} = require('../../../data/model');
const ResponseModel = require('../../../utilities/responseModel');

// get all client
module.exports.getAllClient = async(req, res)=>{
    const clients = await User.findAll({
        where: {
            roleId : 2
        }
    })

    res.json(new  ResponseModel(clients));
    
}

// get all casemaster
module.exports.getAllCasemaster = async(req, res)=>{
    const casemaster = await User.findAll({
        where: {
            roleId : 4
        }
    })

    
    res.json(new  ResponseModel(casemaster));
    
}


// get all lawyer
module.exports.getAllLawyer = async(req, res)=>{
    const lawyer = await User.findAll({
        where: {
            roleId : 3
        }
    })


    res.json(new  ResponseModel(lawyer));
    
}


//delete

module.exports.deleteUser = async (req, res, next) => {

    const id=req.params.id

       

    console.log('777777');

    console.log(id)

    // const{id}=req.body;

    let user = await User.destroy({

        where: {

            id: id

        }

    });

    if (!user) {

        return res.json(new ResponseModel(null, null, ['Deletion Failed']));

    }



    res.json(new ResponseModel(null, ['Successfully deleted']));

}