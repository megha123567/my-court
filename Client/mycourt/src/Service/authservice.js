import axios from "./axios"

export default class AuthService
{
    baseUrl = 'http://localhost';


    async login (data){
        const response = await axios.post(this.baseUrl +'/auth/login',data);

        return response.data;
    }

    async register (data){
        const response = await axios.post(this.baseUrl + '/auth/register', data);
        return response.data;
    }
    async lawyerRegister (data){
        const response = await axios.post(this.baseUrl + '/auth/lawyer', data);
        return response.data;
    }
    async casemasterRegister (data){
        const response = await axios.post(this.baseUrl + '/auth/casemaster', data);
        console.log(response.data)
        return response.data;
    }

    async verifyOtp(data){
        const response = await axios.post(this.baseUrl + '/auth/verifyotp', data);
        return response.data;
    }
}



   





