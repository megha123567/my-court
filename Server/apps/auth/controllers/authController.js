const {User, Role} = require('../../../data/model');
const ResponseModel = require('../../../utilities/responseModel');
const tokenHandler = require('../../../utilities/tokenHandler');


//Login function
module.exports.login = async(req, res)=>{
    const { email, password} = req.body;
    var user = await User.findOne({
        where: {
            email: email,
            password: password
        },
        include: Role
    });

    if(!user){
        return res.json(new ResponseModel(null, null, ['No user Found']))
    }

    // Create Token
    const data = {
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        address: user.address,
        lawyer: user.lawyer,
        roleId: user.roleId,
        roleName: user.dataValues.Role.role
    };
    const token = tokenHandler.createToken(data);
    return res.json(new ResponseModel(token));
};


//Register function
module.exports.register = async(req, res)=>{
    const { phone, address, dob, name, email, password,barCouncilNo,specialization,lawyer} = req.body;
    const data = await User.create({
        name : name,
        phone: phone,
        address: address,
        dob: dob,
        email: email,
        password:password,
        barCouncilNo:barCouncilNo,
        specialization:specialization,
        lawyer:lawyer,
        roleId: 2,
    })
    res.json(new ResponseModel(data));
}


//Lawyer Register function
module.exports.lwayerRegister = async(req, res)=>{
    const { phone, address, dob, name, email, password,barCouncilNo,specialization,lawyer} = req.body;
    
    const data = await User.create({
        name : name,
        phone: phone,
        address: address,
        dob: dob,
        email: email,
        password:password,
        barCouncilNo:barCouncilNo,
        specialization:specialization,
        lawyer:lawyer,
        roleId: 3,
    })
    res.json(new ResponseModel(data));
}

// Casemaster Register function
module.exports.casemasterRegister = async(req, res)=>{
    const { phone, address, dob, name, email, password,barCouncilNo,specialization,lawyer} = req.body;
    const token = tokenHandler.verifyToken(req.token);
    const data = await User.create({
        name : name,
        phone: phone,
        address: address,
        dob: dob,
        email: email,
        password:phone,
        barCouncilNo:barCouncilNo,
        specialization:specialization,
        lawyer:token.id,
        roleId: 4,
    })
    res.json(new ResponseModel(data));
}


//User update
module.exports.updateUser = async (req, res, next) => {
    const token = tokenHandler.verifyToken(req.token);
    var user = await User.findByPk(token.id);
    await user.update(
        {
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            dob: req.body.dob,
            password: req.body.password,
            barCouncilNo: req.body.barCouncilNo,
            specialization: req.body.specialization,
            lawyer: req.body.lawyer,
        },
        {
            where: { id: token.id }
        }
    )
    if (!user) {
        return res.json(new ResponseModel(null, null, ['Not Updated']));
    }

    res.json(new ResponseModel(user));
}


// Otp function
module.exports.verifyOtp = async (req, res)=>{
    const {otp, userId} = req.body;
    const user = await User.findOne({
        where: {
            id: userId,
            token: otp
        }
    });

    if(!user){
        return res.json(new ResponseModel(null, null, ["Invalid OTP"]));
    }

    user.token = 0;
    await user.save();
    return res.json(new ResponseModel(null, "OTP verified successfully."));
}
