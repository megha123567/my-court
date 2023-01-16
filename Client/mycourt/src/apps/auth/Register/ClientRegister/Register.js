import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from 'yup';
import AuthService from '../../../../Service/authservice'
import { Link, useNavigate } from "react-router-dom";
import './ClientRegister.css'


function Register() {
  const navigate = useNavigate();
    return (
    <div className="home">
    
  <div className="container " id="client">
    <div className="page">
    <div className="mix">
        <Formik
        initialValues={{name: '', email: '', phone: '',address: '', dob: '', password: '', cpassword: ''}}
        validationSchema={
            Yup.object().shape({
                email: Yup.string().email().required('Email is required'),
                password: Yup.string().required('Password is required').min(6, "Please enter a name more than 6 characters"),
                cpassword: Yup.string().required('Password is required').oneOf([Yup.ref('password')], 'Passwords does not match'),
            })
        }
        onSubmit={async (values, { setSubmitting }) => {
          var service = new AuthService();
          var result = await service.register(values);
            if (!result.success) {
                alert(result.errors[0]);
                return;
            }

            // alert('register Success');
            navigate("/auth/verifyotp/" + result.data.id);
        }}
        >
            {({isSubmitting})=>(
                <Form>
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <Field type="text" name="name" id="name" class="form-control" placeholder="Name" aria-describedby="helpId"/>
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <Field type="email" class="form-control" name="email" id="email" aria-describedby="emailHelpId" placeholder="abc@mail.com"/>
                  <ErrorMessage name="email" component="div" className='text-danger' />
                </div>
                <div class="mb-1 d-flex ">
                  <label for="phone" class="form-label">Phone No. </label>
                  <Field type="number" name="phone" id="phone" class="form-control"  aria-describedby="helpId"/>
               
                  <label for="dob" class="form-label">DOB</label>
                  <Field type="date" name="dob" id="dob" class="form-control" aria-describedby="helpId"/>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">Address</label>
                  <Field type="text" name="address" id="address" class="form-control" aria-describedby="helpId"/>
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <Field type="password" class="form-control" name="password" id="passord" placeholder="Password"/>
                  <ErrorMessage name="password" component="div" className='text-danger' />
                  </div>
                  <div class="mb-3">
                  <label for="cpassword" class="form-label">Confirm Password</label>
                  <Field type="password" class="form-control" name="cpassword" id="cpassword" placeholder="Confirm Password"/>
                  <ErrorMessage name="cpassword" component="div" className='text-danger' />
                </div>
                
               
                <button type="submit" disabled={isSubmitting} class="btn btn-primary" id="butn">Register</button>
                </Form>

            )}
        
        </Formik>
    
    </div>
    <div className="sick">
        <h1>My<span id='id'>Court</span></h1>
        <p id="e">We act as a catalyst by providing our clients with exceptional resources to help their businesses grow, and when the time is right we can help navigate a successful exit.</p>
        <div>
        <Link to={'/auth/lawyer'} ><button className='btn loginButton' id="btnLogin">Lawyer Register</button></Link>
                 
                </div>
    </div>
    </div>
    </div>

    </div>
    );
  }
  
  export default Register;
  