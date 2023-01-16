import axios from "./axios";



 const getAllClient = async()=>{
    var response = await axios.get('/admin/client')
    return response.data;
    
 }
 const getAllCasemaster = async()=>{
    var response = await axios.get('/admin/casemaster')
    return response.data;
    
 }

 const getAllLawyer = async()=>{
    var response = await axios.get('/admin/lawyer')
    return response.data;
    
 }

 const deleteUser =async(lawyersId, e)=>{

   

   var response = await axios.get('/admin/deleteuser/' + lawyersId)

   

    console.log(response.data)

    return response.data;

 }

 export {getAllClient , getAllCasemaster, getAllLawyer, deleteUser}