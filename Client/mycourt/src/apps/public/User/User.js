
import { Link } from 'react-router-dom';

import { Form, Formik } from 'formik';

import '../Lawyer/Lawyerhome.css'

import Clientnav from './Usernav';

import { React, useState, useEffect } from 'react'

function Lawyerhome() {

  return (

    <>

      <div className="boom">

        <div className='nav'>

          <Clientnav />

        </div>

        <div className='back'>

          <div className='txt'>

            WELCOME USER

          </div>

        </div>

      </div>

    </>

  )

}

export default Lawyerhome

