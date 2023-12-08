import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faComment, faFlagUsa, faSearch } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ background: 'linear-gradient(to right, orange, RGB(255, 120, 120) 50%)' }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
          </button>

         


          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            
            <div className='d-flex  flex-column flex-lg-row justify-content-between align-items-center w-100'>

              <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center'>
                
                <div className='mb-2 mb-lg-0'>
                  <a className="navbar-brand" href="#">
                    <img src="/logo2.png" alt="Bootstrap" width="30" height="30" />
                  </a>
                </div>

                <div className='mx-2 d-none d-lg-block'>
                <FontAwesomeIcon icon={faBars} style={{ color: "white" }} />
                </div>

                <div className='mb-2 mb-lg-0'>
                  <a className="navbar-brand text-white" href="#">Dreamguy's Technologies</a>
                </div>
              </div>

              <div className='d-flex align-items-center justify-content-center flex-column flex-sm-row'>
                <form className="d-flex" role="search">
                  <div className='search-container'>
                    <input
                      className="form-control me-2 search-input"
                      type="text"
                      placeholder='Search here'
                      aria-label="Search"
                      style={{
                        borderRadius: "25px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "white",
                      }}
                    />
                    <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} className='search-icon' />
                  </div>
                </form>

                <ul className="navbar-nav mb-2 mb-lg-0 ms-lg-auto">

                 <div className='d-flex justify-content-center align-items-center innerdiv flex-row flex-md-row  flex-lg-row'>

                 <div className='me-2 mb-2 mb-sm-2'>
                  <li className="nav-item dropdown">
                
                      <img src="/alogo.png" width="25px" height="25px" alt="Flag" /> 
                  
                    <select name="language" className='bg-transparent text-white' style={{ border: "none" }}>
                      <option>English</option>
                      <option>French</option>
                      <option>Spanish</option>
                    </select>
                  </li>
                  </div>

                 <div className='me-2 mb-2 mb-sm-2'>
                  <li className="nav-item position-relative">
                    <a className="nav-link active" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faBell} style={{ color: "white" }} />
                      <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-primary">
                        5
                      </span>
                    </a>
                  </li>
                  </div>

                 <div className='me-2 mb-2 mb-sm-2'>
                  <li className="nav-item position-relative">
                    <a className="nav-link active" aria-current="page" href="#">
                      <FontAwesomeIcon icon={faComment} style={{ color: "white" }} />
                      <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-primary">
                        8
                        <span className="visually-hidden">unread messages</span>
                      </span>
                    </a>
                  </li>
                  </div>

                  <div className='me-2 mb-2 mb-sm-2'>
                  <li className="nav-item">
                    <img src="/mimg2.jpg" className='rounded-circle' height="25px" width="25px" alt="Profile" />
                    <select name="Admin" className='bg-transparent text-white' style={{ border: "none" }}>
                      <option>Admin</option>
                      <option>Admin1</option>
                      <option>Admin2</option>
                    </select>
                  </li>
                  </div>



                  </div>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
