
import { React, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import AuthService from "../../../Service/authservice";
import jwt_decode from "jwt-decode";
import { Link, Navigate } from "react-router-dom"

import './Login.css'


function Login() {
    // const [hasLoggedIn, setHasLoggedIn] = useState(false);
    return (
        <div className="home">
            <div className="container" id='log'>
                <div className="page">
                    <div className="max">
                        <h1>My<span id='ct'>Court</span></h1>
                        <p id='q'>We strive to positively influence our community by adopting sustainable business practices and by providing fair and transparent legal services.</p>
                    </div>
                    <div className="reg">
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validationSchema={
                                Yup.object().shape({
                                    email: Yup.string().email().required('Email is required.'),
                                    password: Yup.string().required('Password is required.')
                                })
                            }
                            onSubmit={async (values, { setSubmitting }) => {
                                var service = new AuthService();
                                var result = await service.login(values);

                                if (!result.success) {
                                    alert(result.errors[0]);
                                    return;
                                }

                                alert('Login success');
                                localStorage.setItem('token', result.data);
                                var decoded = jwt_decode(result.data);
                                switch (decoded.roleName) {
                                    case 'admin':
                                        window.location.href = '/admin';
                                        // <Navigate to='/admin'/>
                                        break;
                                    case 'client':
                                        window.location.href = '/user';
                                        
                                        break;
                                    case 'lawyer':
                                        window.location.href = '/lawyer';
                                        break;
                                    case 'casemaster':
                                        window.location.href = '/casemaster';
                                        break;
                                    default:
                                        window.location.href = '/';
                                        break;
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form id='fm'>
                                    <div>
                                        <label>Email</label>
                                        <Field type="email" name="email" className='form-control' />
                                        <ErrorMessage name="email" component="div" className='text-danger' />
                                       
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <Field type="password" name="password" className='form-control' />
                                        <ErrorMessage name="password" component="div" className='text-danger' />
                                    </div>
                                    <div>
                                    <button type="submit" disabled={isSubmitting} className='btn btn-primary' id='lg'> Login</button>
                                    </div>
                                    {/* {hasLoggedIn && <Navigate to='/user'/>} */}
                    <div >
                    {/* <a href='Client\my-court\src\components\Home\home.js'>New User?</a> */}
                    <Link to={'/auth/register'} id='lk'>New To MyCourt?</Link>
                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Login