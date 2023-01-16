import { React, useState, useEffect } from 'react'
import { getAllCasemaster, deleteUser } from '../../../Service/adminService'
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom"
import  "./Casemaster.css";
import Adminnav from '../../public/Admin/Adminnav';
import { useNavigate } from 'react-router-dom';

function Lawyer() {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const [Lawyer, setLawyer] = useState([]);
    
    useEffect(() => {
        getAllCasemaster().then((lawyers) => {
            setLawyer(lawyers.data)
           
        })
    }, [])

    const getRow = (lawyers, index) => {
        return (
            <tr key={index} id={lawyers.id}>
                <td>{lawyers.name}</td>
                <td>{lawyers.email}</td>
                <td>{lawyers.phone}</td>
                <td>{lawyers.address}</td>
                <td>{lawyers.dob}</td>
                <td>{lawyers.lawyer}</td>
                <td> <button onClick={(e) => deleteuser(lawyers.id, e)}  className='btn btn-secondary'>Delete</button></td>
              </tr>
        )
    }
    function deleteuser(lawyersId, e)  {
        if (!window.confirm('Are you sure you want to delete ?')) {
            return;
        }
        deleteUser(lawyersId, e);
        var row = document.getElementById(id);
        row.remove();
    }
    return (
        <>
             <Adminnav/>
             
            <div className='container'>
                <div ><h1> Casemaster</h1></div>
                <div className='con'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Dob</th>
                            <th>Lawyer</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Lawyer.map(getRow)}
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}
export default Lawyer