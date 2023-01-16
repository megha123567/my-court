import axios from "./axios";


export default class AuthService{
  baseUrl = 'http://localhost';

  async getAll(){
        var response = await axios.get('/user/lawyer')
        return response.data;
  }

  async getAllpost(data){
    var response = await axios.post('/user/update', data);
    
    return response.data;
  }
  
  async appointment(data){
    console.log(data)
    var res = await axios.post('/user/appointment/' + data.id, data)
   return res.data;
  }

  async lawyerSearch(data){
    var res = await axios.post('/user/search', data);
    return res.data;
  }
}