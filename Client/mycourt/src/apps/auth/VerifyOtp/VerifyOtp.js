import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";
import AuthService from "../../../Service/authservice";
import {useNavigate, useParams} from "react-router-dom";


function VerifyOtp() {
    const navigate = useNavigate();
    const params = useParams();
  return (
    <div className="home">
      <div className="container">
        <div>
          <div className="reg">
            <Formik
              initialValues={{
                otp: "",
              }}
              validationSchema={Yup.object().shape({
                otp: Yup.string().length(6).required("OTP is required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                var service = new AuthService();
                var result = await service.verifyOtp({...values, userId: params.id});
                if (!result.success) {
                  alert(result.errors[0]);
                  return;
                }

                alert("Register Success");
                navigate("/auth/login");
                // localStorage.setItem('token', res.data);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div class="mb-3">
                    <label for="otp" class="form-label">
                      OTP
                    </label>
                    <Field
                      type="number"
                      class="form-control"
                      name="otp"
                      id="otp"
                      placeholder="Enter OTP"
                    />
                    <ErrorMessage
                      name="otp"
                      component="div"
                      className="text-danger"
                    />
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Verify OTP
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div className="pic">
            <h1>Verify OTP</h1>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
