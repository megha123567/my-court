import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './apps/auth/Login/Login';
import Register from './apps/auth/Register/ClientRegister/Register';
import Lawyer from './apps/user/Lawyer/Lawyer';
import Client from './apps/admin/Customer/Customer';
import Csaemaster from './apps/admin/Casemaster/Casemaster';
import AdminLawyer from './apps/admin/Lawyer/Lawyer';
import Appointment from './apps/user/Appointment/Appointment';
import CaseDetails from "./apps/casemaster/CaseDetails/CaseDetails";
import Home from "./apps/public/Home/Home";
import Admin from './apps/public/Admin/Admin';
import LawyerRegister from './apps/auth/Register/LawyerRegister/LawyerRegister';
import CasemasterRegister from './apps/auth/Register/Casemaster/CasemasterRegister';
import LawyerHome from './apps/public/Lawyer/lawyer';
import CasemasterLawyer from './apps/casemaster/CasemasterLawyer';
import AppointmentView from './apps/casemaster/AppointmentView';
import CaseDetailsView from './apps/lawyer/CaseDetailsView';
import GetUserProfile from './apps/lawyer/lawyerProfile';
import Casemasterhome from './apps/public/Casemaster/Casemaster';
import GetCasemasterProfile from './apps/casemaster/CasemasterProfile';
import GetClientProfile from './apps/user/ClientProfile';
import Clienthome from './apps/public/User/User';
import Caseview from './apps/lawyer/CaseView';
import AboutUs from './apps/public/Aboutus/Aboutus';
import VerifyOtp from './apps/auth/VerifyOtp/VerifyOtp';

const routes =createBrowserRouter([
  {
    path: "/auth", children: [
      {
        path: "/auth/login", element: <Login/>
      },
      {
        path: '/auth/register', element: <Register/>
      },
      {
        path: '/auth/lawyer', element: <LawyerRegister/>
      },
      {
        path: '/auth/casemaster', element: <CasemasterRegister/>
      },
      {
        path: '/auth/verifyotp/:id', element: <VerifyOtp/>
      }
      
    ]
  },
  {
    path: "/user", children: [
      {
        path: "/user", element: <Clienthome/>
      },
      {
        path: "/user/lawyer", element: <Lawyer/>
      },
      {
        path: "/user/appointment/:id", element: <Appointment/>
      },
      {
        path: "/user/profile", element: <GetClientProfile/>
      }
    ]
  },
  {
    path: "/admin", children: [
      {
        path: "/admin/client", element: <Client/>
      },
      {
        path: "/admin/casemaster", element: <Csaemaster/>
      },
      {
        path: "/admin/lawyer", element: <AdminLawyer/>
      },
      {
        path: "/admin", element: <Admin/>
      }
    ]
  },
  {
    path: "/casemaster", children:[
      {
        path: '/casemaster', element: <Casemasterhome/>
      },
      {
        path: "/casemaster/case/:id", element: <CaseDetails/>
      },
      {
        path: "/casemaster/view", element: <CasemasterLawyer/>
      },
      {
        path: "/casemaster/appointment", element: <AppointmentView/>

      },
      {
        path: "/casemaster/profile", element: <GetCasemasterProfile/>
      }
    ]
    
  },
  {
    path:'/home', element: <Home/>
  },
  {
    path:'/lawyer', children:[
      {
        path:'/lawyer', element: <LawyerHome/>
      },
      {
        path: '/lawyer/casedetails', element:<CaseDetailsView/>
      },
      {
        path: '/lawyer/profile', element:<GetUserProfile/>
      },
      {
        path: '/lawyer/caseview', element: <Caseview/>
      }
    ]
  },
  {
    path: '/about', element: <AboutUs/>
  }
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
