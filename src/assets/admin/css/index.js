import React from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

// import { Icons } from '../../assets/admin/css/icons.js';
// import { Owl } from '../../assets/admin/css/owl.carousel.js';
// import { Style } from '../../assets/admin/css/main-style.js';
// import { Responsive } from '../../assets/admin/css/responsive.js';
// import { Bootstrap } from '../../assets/admin/css/bootstrap.min.js';

// import '../../assets/admin/js/apps.js';
// import '../../assets/admin/js/isotope-int.js';
// import '../../assets/admin/js/main.js';


export default function Dashboard() {

  const dispatch = useDispatch();

  function handleLogout() {
      dispatch(signOut());
      
  }
    
  return (
    <div className="menu-active">
      Dashboard!        
      
      <button onClick={handleLogout}>Logout</button>

    {/* <Icons>
    <Owl>
    <Style>
    <Responsive>  
    <Bootstrap>   */}
      <div className="panel-layout">
        <div className="top-bar">
          <div className="logo"> <a href="index.html" title=""><img src="images/logo.png" alt=""/></a> </div>
          <div className="menu-options"><span className="menu-action"><i></i></span></div>
          <div className="quick-links">
            <ul>
              <li><a title="" href="/" className="show-status"><i className="fa fa-cog"></i></a>
                <div className="noti-lst setting">
                  <div className="noti-tp"> <span>profile setting</span></div>
                  <ul>
                    <li><a href="/" title=""><i className="fa fa-user"></i>your profile</a></li>
                    <li><a href="/" title=""><i className="fa fa-edit"></i>Edit profile</a></li>
                    <li><a href="/" title=""><i className="fa fa-question-circle"></i>Get Help</a></li>
                    <li><a href="/" title=""><i className="fa fa-sign-out"></i>Log out</a></li>
                  </ul>
                </div>
              </li>
              <li><a title="" href="/" id="toolFullScreen" className=""><i className="fa fa-arrows-alt"></i></a></li>
              <li><a title="" href="/" className="refresh-page"><i className="fa fa-refresh"></i></a></li>
              <li><a title="" href="/" className="right-menu-btn"><i className="fa fa-align-right"></i></a></li>
            </ul>
          </div>
          <form className="search-form">
            <input type="text" placeholder="Search Here..." />
            <button type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
        {/* <!-- Top Bar --> */}
      </div>  

    {/* </Bootstrap>
    </Responsive>
    </Style>
    </Owl>
    </Icons> */}
    </div>
  );
}
  