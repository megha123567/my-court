import axios from "axios";

const viewLawyer = async()=>{
    var response = await axios.get('/casemaster/view')
    return response.data;
}
const appointmentview= async()=>{
    var response=await axios.get('/casemaster/viewappointments')
    return response.data;
}

const profile = async()=>{
    var response = await axios.get('/user/profile');
    return response.data.data;
}

const caseView = async()=>{
    var response = await axios.get('/casemaster/caseview');
    return response.data;
}

export{viewLawyer,appointmentview, profile, caseView};