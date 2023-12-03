import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faBell,faComment, faFlagUsa ,faSearch} from '@fortawesome/free-solid-svg-icons';


const Nav=()=>{


    return(
        <>
<nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, orange, RGB(255, 120, 120) 50%)'}}>
    <div className="container-fluid ">
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">

        <div className='d-flex  justify-content-between align-items-center'>
            <div>
            <a className="navbar-brand" href="#">
            <img src="/logo2.png" alt="Bootstrap"  width="30" height="30"/>
            </a>
            </div>

            <div  className="d-md-none" style={{ cursor: 'pointer', padding: '10px' }}>
             <FontAwesomeIcon icon={faBars} style={{color:"white"}} />
             </div>

             <div>
            <a className="navbar-brand text-white" href="#">Dreamguy's Technologies</a>
            </div>
        </div>

        <div className='d-inline-flex'>
                <form className="d-flex" role="search">
                    <div className='search-container'>
                    <input className="form-control me-2 search-input" type="text" placeholder='Search here'  aria-label="Search" 
                      style={{
                        borderRadius: "25px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                      }}
                    
                    />
                    <FontAwesomeIcon icon={faSearch} style={{color:"white"}} className='search-icon' />
                    </div>
                </form>
                <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <img src="/alogo.png" width="25px" height="25px"/>English
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">English(UK)</a></li>
                            <li><a className="dropdown-item" href="#">English(US)</a></li>
                        </ul>
                    </li>
                    <li className="nav-item position-relative">
                        <a className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faBell} style={{color:"white"}}/>
                        <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-primary" >
                            5
                        </span></a>
                    </li>
                    <li className="nav-item position-relative">
                        <a className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faComment} style={{color:"white"}}/>
                        <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-primary">
                            8
                        <span class="visually-hidden">unread messages</span>
                        </span></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/mimg1.jpg" className='rounded-circle' height="25px" width="25px"/>
                            Admin
                        </a>
                        <ul className="dropdown-menu" style={{position:"absolute",right:"0",maxWidth: "100px" }} >
                            <li><a className="dropdown-item" href="#">
                            <img src="/mimg2.jpg" className='rounded-circle' height="25px" width="25px"/>
                                Admin1</a></li>
                            <li><a className="dropdown-item" href="#">
                            <img src="/mimg7.jpg" className='rounded-circle' height="25px" width="25px"/>
                                Admin2</a></li>
                       </ul>
                   </li>
                </ul>
            </div>
         </div>
  </div>
</nav>
        </>
    )
}

export default Nav;