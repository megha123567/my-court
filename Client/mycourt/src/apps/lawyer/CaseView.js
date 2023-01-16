import { useEffect, useState } from 'react';
import {caseView} from '../../Service/profileService';


function Caseview(){
    const [Lawyer, setLawyer] = useState([]);
    useEffect(()=>{
        caseView().then((lawyers)=>{
            setLawyer(lawyers.data)
        })
    },[]);

    const getRow = (lawyers, index)=>{
        return (
            <tr key={index}>
                <td>{lawyers.caseno}</td>
                <td>{lawyers.casedesc}</td>
                <td>{lawyers.casetype}</td>
                <td>{lawyers.paymentstatus}</td>
                <td>{lawyers.appointmentId}</td>
                {/* <td>{lawyers.lawyer}</td> */}
                {/* <td>{lawyers.specialization}</td> */}
                <td><a href='/'>Edit/Delete</a></td>
            </tr>
        )
    }
    return(
        <>
         <div className='container'>
                <div className='text-center'><h1> CaseDetails</h1></div>
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th>caseno</th>
                            <th>casedesc</th>
                            <th>casetype</th>
                            <th>paymentstatus</th>
                            <th>appointmentId</th>
                            {/* <th>lawyer</th> */}
                            {/* <th>Specialization</th> */}
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Lawyer.map(getRow)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Caseview