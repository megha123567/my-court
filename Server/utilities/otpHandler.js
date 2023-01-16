// javascript program to send an otp to mail
const nodemailer = require('nodemailer');

function sendOtp(email){
    // Nodemailer setup 
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rajaiswary502@gmail.com',
            pass: 'poylzaxdghofnatm'
            
        }
    });

    const otp = generateOTP();
    let mailOptions = {
        from: 'rajaiswary502@gmail.com',
        to:email,
        subject: 'OTP Verification',
        text: 'Your OTP is ' + otp
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        }else{
            mailOptions
        }
    })
    return otp;
}

let generateOTP = () => { 
	let digits = '0123456789'; 
	let otp = ''; 
	for (let i = 0; i < 6; i++ ) { 
		otp += digits[Math.floor(Math.random() * 10)]; 
	} 
	return otp; 
}

module.exports.sendOtp = sendOtp;