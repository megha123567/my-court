
import { Link } from 'react-router-dom';

import { Form, Formik } from 'formik';

import './Lawyerhome.css';

import Lawyernav from './Lawyernav';

import { React, useState, useEffect } from 'react'

function Lawyerhome() {

  return (

    <>

      <div className="boom">

        <div className='nav'>

          <Lawyernav />

        </div>

        <div className='back'>

          <div className='txt'>

            WELCOME LAWYER

          </div>

        </div>

      </div>

    </>

  )

}

export default Lawyerhome

