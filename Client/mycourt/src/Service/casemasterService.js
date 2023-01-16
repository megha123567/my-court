import axios from "axios";


export default class Casemasterservice{
    baseurl = 'http://localhost';

    async caseapp(data){
        var response = await axios.post('/casemaster/case/' + data.id , data)
    
    return response.data;

    }
   
}