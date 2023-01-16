import { React, useState, useEffect } from 'react'
import Clientnav from '../../public/User/Usernav';
import AuthService from '../../../Service/userService'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Field, Formik, Form, ErrorMessage } from "formik";
import  './Lawyer.css'
function Lawyer() {
    const [Lawyer, setLawyer] = useState([]);

    useEffect(() => {
        var service = new AuthService();
        service.getAll().then((lawyers) => {
            setLawyer(lawyers.data)

        })
    }, [])

    const getRow = (lawyers, index) => {
        return (
            <div className='cardview'>
                
            <tc key={index}>
                {/* <img src="https://media.gettyimages.com/id/1324489178/photo/portrait-of-young-businesswoman.jpg?s=612x612&w=0&k=20&c=veBaFV9sgk6W6lGnigzCM4P5GV3QN7AAm-pa0o0X9ko="/> */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://media.gettyimages.com/id/480820307/photo/portrait-of-young-lawyer-holding-degree-isolated-over-white-background.jpg?s=612x612&w=gi&k=20&c=-Z54yBDj_mGVKNreD4HpD-SSMhU1cfJUZef57nMj2aM=" />
      <Card.Body>
      <Card.Title>{lawyers.name}</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>specialization: {lawyers.specialization}</ListGroup.Item>
        <ListGroup.Item>email: {lawyers.email}</ListGroup.Item>
        <ListGroup.Item>Contact: {lawyers.phone}</ListGroup.Item>
      </ListGroup>
      </Card.Body>
      <td><Link to={`/user/appointment/${lawyers.id}`} className="btn btn-success">Appointment</Link></td>
                </Card>
            </tc>
            </div>
        )
    }
    return (
        <>
        <Clientnav/>
         
<div className='container'>
               
{/* <Formik
                    initialValues={{ specialization:null }}

                    onSubmit={ async(values,{ setSubmitting }) => {
                        var service = new AuthService();
                        var result = await service.lawyerSearch(values);
                        console.log(result)
                        setLawyer(result);

                        
                        

                        // if (!result.success) {
                        //     alert(result.errors[0]);
                        //     return;
                        // }
                        setSubmitting=false

                        // alert("success");
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div>
                                <label>Specialization</label>
                                <Field type='text' name='specialization' className='form-control'>

                                </Field>
                            </div>
                            <div>
                                <button type="submit"  class="btn btn-primary">Submit</button>
                            </div>
                        </Form>
                    )}
                </Formik> */}
               <h1 className='tex'>Lawyers</h1>
                <table className='table'>
                    
                    <tbody>
                        {Lawyer.map(getRow)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Lawyer


