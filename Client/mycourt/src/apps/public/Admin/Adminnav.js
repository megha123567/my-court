import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } from 'cdbreact';
  import { NavLink } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';

  function Adminnav(){
    const navigate = useNavigate();

    function logout(){
      localStorage.removeItem('token');
      navigate('/auth/login')
    }
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
              MyCourt
            </a>
          </CDBSidebarHeader>
  
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
            <NavLink exact to="/admin" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/admin/lawyer" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="columns">Lawyer</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/admin/casemaster" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">CaseMaster</CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/admin/client" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="user">Client</CDBSidebarMenuItem>
              </NavLink>
              <button onClick={logout} className='btn btn-secondary'  id="btnLogin" style={{marginLeft:'70px'}}>logout</button>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
  
      )
  }
  export default Adminnav