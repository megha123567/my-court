import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import './Appointment.css';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../Service/userService"


function Appointment() {
  const navigate = useNavigate();

  const params = useParams();

  const id = params.id
    return (
    <div className="home">
    
  <div className="container" id="app">
    <div className="page">
    <div className="child">
        <Formik
        initialValues={{casedesc: '', date: '', time: '', customerId: ''}}
        onSubmit={async (values, { setSubmitting }) => {
            // var result = await appointments(values)
          var service = new AuthService();
          var result = await service.appointment({...values, id:id});
            if (!result.success) {
                alert(result.errors[0]);
                return;
            }

            alert("success");
            navigate('/user')
        }}
        >
            {({isSubmitting})=>(
                <Form id="from">
                <div class="mb-3">
                  <label for="casedesc" class="form-label">casedesc</label>
                  <Field type="text" name="casedesc" id="casedesc" class="form-control" placeholder="Enter The Details" aria-describedby="helpId"/>
                </div>
                <div class="mb-3">
                  <label for="date" class="form-label">date</label>
                  <Field type="date" class="form-control" name="date" id="date" aria-describedby="emailHelpId" placeholder="abc@mail.com"/>
                  {/* <ErrorMessage name="date" component="div" className='text-danger' /> */}
                </div>
                <div class="mb-3">
                  <label for="time" class="form-label">time </label>
                  <Field type="time" name="time" id="time" class="form-control"  aria-describedby="helpId"/>
                </div>
                {/* <div class="mb-3">
                  <label for="customerId" class="form-label">customerId</label>
                  <Field type="number" name="customerId" id="customerId" class="form-control" aria-describedby="helpId"/>
                </div> */}
                <button type="submit" disabled={isSubmitting} class="btn btn-primary" id="kl">Get Appointment</button>
                </Form>

            )}
        
        </Formik>
    
    </div>
    <div className="hello">
        <h1>Appointment</h1>
        <p id="t">Don’t Delay, Get The Help You Need Today.</p>
    </div>
    </div>
    </div>

    </div>
    );
  }
  
  export default Appointment;
  