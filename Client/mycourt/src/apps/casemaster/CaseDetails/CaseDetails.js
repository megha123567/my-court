import { Field, Formik, Form, ErrorMessage } from "formik";
import React from "react";
import Casemasterservice from "../../../Service/casemasterService";
import './CaseDetails.css'

import { useParams, useNavigate } from "react-router-dom";

function CaseDetails() {
  const navigate = useNavigate();

  const params = useParams();

  const id = params.id
    return (
    <div className="home">
    
  <div className="container" id="tiger">
    <div className="sage">
    <div className="chase">
        <Formik
        initialValues={{caseno: '', casedesc: '', casetype: '',paymentstatus: '', appointmentId: ''}}
      
        onSubmit={async (values, { setSubmitting }) => {
          var service = new Casemasterservice();
          var result = await service.caseapp({...values, id:id});
            if (!result.success) {
                alert(result.errors[0]);
                return;
            }

            alert('New Case Added');
            navigate('/casemaster')
        }}
        >
            {({isSubmitting})=>(
                <Form id="gg">
                <div class="mb-3">
                  <label for="caseno" class="form-label">Case No</label>
                  <Field type="text" name="caseno" id="caseno" class="form-control"  aria-describedby="helpId"/>
                </div>
                <div class="mb-3">
                  <label for="casedesc" class="form-label">Case Description</label>
                  <Field type="text" class="form-control" name="casedesc" id="casedesc" aria-describedby="emailHelpId" />
                  
                </div>
                <div class="mb-3">
                  <label for="casetype" class="form-label">Case Type </label>
                  <Field type="text" name="casetype" id="casetype" class="form-control"  aria-describedby="helpId"/>
                </div>
               
                <button type="submit" disabled={isSubmitting} class="btn btn-primary" id="sad">Submit</button>
                </Form>

            )}
        
        </Formik>
    
    </div>
    <div className="mick">
        <h1>CaseDetails</h1>
        <p id="lie">Right is right, even if everyone is against it, and wrong is wrong, even if everyone is for it.</p>
    </div>
    </div>
    </div>

    </div>
    );
  }
  
  export default CaseDetails;
  