import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav=()=>{


    return(
        <>
<nav className="navbar navbar-expand-lg"     style={{ background: 'linear-gradient(to right, orange, RGB(255, 120, 120) 50%)'}}>
    <div className="container-fluid ">
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarTogglerDemo01">

        <div className='d-flex  justify-content-between align-items-center'>
            <div>
            <a class="navbar-brand" href="#">
            <img src="/logo.png" alt="Bootstrap"  width="30" height="30"/>
            </a>
            </div>

            <div style={{ cursor: 'pointer', padding: '10px' }}>
             <FontAwesomeIcon icon={faBars} />
             </div>

             <div>
            <a className="navbar-brand text-white" href="#">Dreamguy's Tecnologies</a>
            </div>
        </div>

        <div className='d-inline-flex'>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search here" aria-label="Search" 
                    style={{borderRadius:"25px",backgroundColor: 'rgba(255, 255, 255, 0.1)','::placeholder': {color: 'white'}}}/>
                </form>
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">English(UK)</a></li>
                            <li><a class="dropdown-item" href="#">English(US)</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">icon</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">icon</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Admin1</a></li>
                            <li><a class="dropdown-item" href="#">Admin2</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
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