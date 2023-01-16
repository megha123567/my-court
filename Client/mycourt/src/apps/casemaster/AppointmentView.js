import {appointmentview} from '../../Service/profileService';
import { React, useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import Casemasternav from '../public/Casemaster/Casemasternav';


function AppointmentView(){
    const [lawyer, setLawyers] = useState([]);
    useEffect(()=>{
        appointmentview().then((data)=>{
            setLawyers(data.data);
        })

    },[])
    const getRow = (data, index) => {
        return (
            <tr key={index}>
                <td>{data.casedesc}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.customerId}</td>
                <td><Link to={`/casemaster/case/${data.id}`}className='btn btn-secondary'>Add Case</Link></td>
            </tr>
        )
    }
    return(
        <>
        <Casemasternav/>
        <div className='container'>
                <div className='text-center'><h1> Appointments</h1></div>
                <div className='con'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Case Description</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Client Id</th>
                            <th>Add Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lawyer.map(getRow)}
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}
export default AppointmentView;