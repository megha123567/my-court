
import { Link } from 'react-router-dom';

import { Form, Formik } from 'formik';

import '../Lawyer/Lawyerhome.css'

import Casemasternav from './Casemasternav';

import { React, useState, useEffect } from 'react'

function Lawyerhome() {

  return (

    <>

      <div className="boom">

        <div className='nav'>

          <Casemasternav />

        </div>

        <div className='back'>

          <div className='txt'>

            WELCOME CASEMASTER

          </div>

        </div>

      </div>

    </>

  )

}

export default Lawyerhome
