
import { Link } from 'react-router-dom';

import { Form, Formik } from 'formik';

import '../Lawyer/Lawyerhome.css'

import Adminnav from './Adminnav';

import { React, useState, useEffect } from 'react'

function Lawyerhome() {

  return (

    <>

      <div className="boom">

        <div className='nav'>

          <Adminnav />

        </div>

        <div className='back'>

          <div className='txt'>

            WELCOME ADMIN

          </div>

        </div>

      </div>

    </>

  )

}

export default Lawyerhome
