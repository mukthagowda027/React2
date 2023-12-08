import React, { useState ,useEffect} from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisV, faPen, faTrashAlt, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from './modal';
import Nav from './nav';
import ModalComponent2 from './modaledit ';
import { Dropdown } from 'react-bootstrap';

const App = () => {

    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [employeeToEdit, setEmployeeToEdit] = useState(null);

    const toggleDropdown = () => {
        setDropdown(true);
    }

    const openEditModal = (index) => {
        setEditModalOpen(true);
        setEmployeeToEdit(data[index]);
    };

    const closeEditModal = () => {
        setEditModalOpen(false);
    };



    const data = [
        {
            firstname: "John",
            lastname: "Doe",
            username: "John Doe",
            email: "johndoe@gmail.com",
            password: "johndoe@",
            confirmpassword: "johndoe@",
            employeeid: "FT-0001",
            joiningdate: "01-01-2022",
            phone: "7836956783",
            company: "Global Technologies",
            department: "Development",
            designation: "Web designer",
            src: "/mimg1.jpg"
        },

        {
            firstname: "Richard",
            lastname: "Miles",
            username: "Richard Miles",
            email: "RichardMiles@gmail.com",
            password: "richardmiles@",
            confirmpassword: "richardmiles@",
            employeeid: "FT-0002",
            joiningdate: "01-02-2022",
            phone: "9854309945",
            company: "Global Technologies",
            department: "Development",
            designation: "Web developer",
            src: "/mimg2.jpg"
        },

        {
            firstname: "John",
            lastname: "Smith",
            username: "John Smith",
            email: "johnsmith@gmail.com",
            password: "johnsmith@",
            confirmpassword: "johnsmith@",
            employeeid: "FT-0003",
            joiningdate: "01-03-2022",
            phone: "7836958963",
            company: "Global Technologies",
            department: "Development",
            designation: "Android developer",
            src: "mimg3.jpg"
        },

        {
            firstname: "Mike",
            lastname: "Litorus",
            username: "Mike Litorus",
            email: "mikelitorus@gmail.com",
            password: "mikelitorus@",
            confirmpassword: "mikelitorus@",
            employeeid: "FT-0004",
            joiningdate: "01-04-2022",
            phone: "7854686783",
            company: "Global Technologies",
            department: "Development",
            designation: "IOS developer",
            src: "mimg4.jpg"
        },

        {
            firstname: "Wilmer",
            lastname: "Deluna",
            username: "Wilmer deluna",
            email: "wilmerdeluna@gmail.com",
            password: "wilmerdeluna@",
            confirmpassword: "wilmerdeluna@",
            employeeid: "FT-0005",
            joiningdate: "01-05-2022",
            phone: "7836945373",
            company: "Global Technologies",
            department: "Development",
            designation: "Team Leader",
            src: "mimg5.jpg"
        },

        {
            firstname: "Jeffrey",
            lastname: "Warden",
            username: "Jeffrey Warden",
            email: "jeffrey@gmail.com",
            password: "jeffrey@",
            confirmpassword: "jeffrey@",
            employeeid: "FT-0006",
            joiningdate: "01-06-2022",
            phone: "789807783",
            company: "Global Technologies",
            department: "Development",
            designation: "Web developer",
            src: "mimg6.jpg"
        },

        {
            firstname: "Bernardo",
            lastname: "Galaviz",
            username: "Bernardo Galaviz",
            email: "bernardo@gmail.com",
            password: "bernardo@",
            confirmpassword: "bernardo@",
            employeeid: "FT-0007",
            joiningdate: "01-07-2022",
            phone: "7836978473",
            company: "Global Technologies",
            department: "Development",
            designation: "Web developer",
            src: "mimg7.jpg"
        },

        {
            firstname: "Lesley",
            lastname: "Grauer",
            username: "Lesley Grauer",
            email: "lesley@gmail.com",
            password: "lesley@",
            confirmpassword: "lesley@",
            employeeid: "FT-0008",
            joiningdate: "01-08-2022",
            phone: "7836956783",
            company: "Global Technologies",
            department: "Development",
            designation: "Team Leader",
            src: "gimg1.jpg"
        },

        {
            firstname: "Jeffrey",
            lastname: "Lalor",
            username: "Jeffrey Lalor",
            email: "lalor@gmail.com",
            password: "lalor@",
            confirmpassword: "lalor@",
            employeeid: "FT-0009",
            joiningdate: "01-09-2022",
            phone: "7836956783",
            company: "Global Technologies",
            department: "Development",
            designation: "Team Leader",
            src: "mimg8.jpg"
        },

        {
            firstname: "Loren",
            lastname: "Gatlin",
            username: "Loren Gatlin",
            email: "loren@gmail.com",
            password: "gatlin@",
            confirmpassword: "gatlin@",
            employeeid: "FT-0010",
            joiningdate: "01-10-2022",
            phone: "7836956783",
            company: "Global Technologies",
            department: "Development",
            designation: "Android developer",
            src: "gimg2.jpg"
        },

        {
            firstname: "Tarah",
            lastname: "shroff",
            username: "Tarah Shroff",
            email: "tarah@gmail.com",
            password: "tarahs@",
            confirmpassword: "tarahs@",
            employeeid: "FT-0011",
            joiningdate: "01-11-2022",
            phone: "7836956783",
            company: "Global Technologies",
            department: "Development",
            designation: "Android developer",
            src: "gimg3.jpg"
        },

        {
            firstname: "Catherine",
            lastname: "Mathew",
            username: "Catherine Mathew",
            email: "cathy@gmail.com",
            password: "cathy@",
            confirmpassword: "cathy@",
            employeeid: "FT-0012",
            joiningdate: "01-12-2022",
            phone: "7836952363",
            company: "Global Technologies",
            department: "Development",
            designation: "Android developer",
            src: "gimg4.jpg"
        },

    ]

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [entries, setEntries] = useState(10);


    const [viewMode, setViewMode] = useState('grid');

    useEffect(() => {
        setViewMode('grid');
    }, []);

    const toggleViewMode = () => {
        setViewMode((prevMode) => (prevMode === 'grid' ? 'row' : 'grid'));
    };

    const handleImageClick = () => {
        toggleViewMode();
    };


    const [currentPage, setCurrentPage] = useState(1);

    const handleEntriesChange = (event) => {
        setEntries(Number(event.target.value));
        setCurrentPage(1); 
      };
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / entries);

    const startIndex = (currentPage - 1) * entries;
    const endIndex = startIndex + entries;
    const currentItems = data.slice(startIndex, endIndex);
       
    const startIdx = (currentPage - 1) * entries;
    const endIdx = startIdx + entries;
      
    const displayedData = data.slice(startIdx, endIdx);
      
      


    return (
        <>
            <Nav />


        <div className='container-fixed'>
                
                
                <div className='container-fixed mx-3 '>
                    <div className='row-md-12  d-flex flex-column flex-md-row'>
                        <div className='col mt-4 d-flex flex-column flex-lg-row justify-content-lg-between justify-content-between align-items-center'>

                            <div>
                                <h4>Employee</h4>
                                <h6>Dashboard / Employee</h6>
                            </div>

                            <div>
                                <ul className='d-flex flex-row justify-content-between align-items-center' style={{ listStyleType: "none" }}>
                                    <li className="">
                                        <div className='border d-flex justify-content-center align-items-center' onClick={handleImageClick} style={{ width: "30px", height: "30px" }}>
                                            <img src="/iconbox.png" height={"15px"} width={"15px"} />
                                        </div>
                                    </li>
                                    <li className='ms-3' >
                                        <div className='border d-flex justify-content-center align-items-center' onClick={toggleViewMode} style={{ cursor: 'pointer', padding: '10px', width: "30px", height: "30px" }}>
                                            <FontAwesomeIcon icon={faBars} style={{ color: "grey" }} />
                                        </div></li>
                                    <li className='ms-3'>
                                        <button type="button" className="btn px-4" style={{ backgroundColor: "orange", color: "white", borderRadius: "25px" }} onClick={openModal}>
                                            + Add Employee
                                        </button>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid mt-4 mb-2 mx-1">
                    <div class="row justify-content-between row-gap-1">
                        <div class="col-12 col-md-3 mb-2">
                            <input type="text" class="form-control" placeholder="Employee ID" />
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <input type="text" class="form-control" placeholder="Employee Name" />
                        </div>
                        <div className="col-12 col-md-3 mb-2">

                            <div class="dropdown">
                                <button class="btn border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ width: "100%" }}>
                                    Select Designation
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a className="dropdown-item active" href="#">Web Developer</a></li>
                                    <li><a className="dropdown-item" href="#">Android Developer</a></li>
                                    <li><a className="dropdown-item" href="#">Team Leader</a></li>
                                </ul>

                            </div>
                        </div>
                        <div class="col-12 col-md-3 mb-2">
                            <button className='btn ' style={{ backgroundColor: "lightgreen", color: "white", width: "100%" }}><strong>Search</strong></button>
                        </div>
                    </div>
                </div>

                { viewMode === 'grid' ? (


               <div className='container-fluid mt-3 gridview'>
                    <div class="row row-cols-1 row-cols-md-2  row-cols-lg-4 " style={{ marginRight: '-1px', marginLeft: '-1px' }}>
                        {data && data.map((el, index) =>
                            <div key={index} className={`col mb-4 ${index > 3 ? 'col-lg-3' : ''}`}>
                                <div class="col border rounded mx-2 custom-div d-flex flex-column justify-content-center align-items-center" style={{ height: "140px", width: "100%" }}>
                                    <img src={el.src} width="60px" height="60px" className='mb-2 rounded-circle' />
                                    <h6>{el.username}</h6>
                                    <p>{el.designation}</p>

                                    <div class="dropdown" style={{ position: "absolute", top: "0", right: "10px" }}>
                                        <button class="btn custom-dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <FontAwesomeIcon icon={faEllipsisV} />
                                        </button>
                                        <ul class="dropdown-menu dropdown-content" >
                                            <li><a href="#" onClick={() => openEditModal(index)}><FontAwesomeIcon icon={faPen} />Edit</a></li>
                                            <li><a href="#"><FontAwesomeIcon icon={faTrashAlt} />Delete</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>)}

                    </div>
                </div>) 
                
                :

                   ( <div className='container-fixed mx-4 rowview'>

                        <div className='row mb-2'>
                            <div className='col'>
                                <label>Show </label>
                                <select value={entries} onChange={handleEntriesChange}>
                                    <option value={12}>12</option>
                                    <option value={10}>10</option>
                                    <option value={5}>5</option>
                                    <option value={6}>6</option>
                                    <option value={7}>7</option>
                                    <option value={8}>8</option>
                                </select>
                                <label>entries</label>
                            </div>
                        </div>


                        <div className='row'>
                            <div className='col'>
                                <div className='table-responsive-sm'>
                                <table className='table table-striped custom-table2' style={{ fontSize: "small" }}>
                                    <thead>
                                        <tr>
                                            <td>
                                                <div className='d-flex justify-content-between align-items-center' style={{ position: "relative" }}>
                                                    <div>
                                                        Name
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCaretUp} style={{ position: "absolute", top: "0", right: '0px', color: "lightgray" }} />
                                                        <FontAwesomeIcon icon={faCaretDown} style={{ position: "absolute", top: "8px", right: '0px', color: "lightgray" }} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex justify-content-between align-items-center' style={{ position: "relative" }}>
                                                    <div>
                                                        Employee Id
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCaretUp} style={{ position: "absolute", top: "0", right: '0px', color: "lightgray" }} />
                                                        <FontAwesomeIcon icon={faCaretDown} style={{ position: "absolute", top: "8px", right: '0px', color: "lightgray" }} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className='d-flex justify-content-between align-items-center' style={{ position: "relative" }}>
                                                    <div>
                                                        Email
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCaretUp} style={{ position: "absolute", top: "0", right: '0px', color: "lightgray" }} />
                                                        <FontAwesomeIcon icon={faCaretDown} style={{ position: "absolute", top: "8px", right: '0px', color: "lightgray" }} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className='d-flex justify-content-between align-items-center' style={{ position: "relative" }}>
                                                    <div>
                                                        Mobile
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCaretUp} style={{ position: "absolute", top: "0", right: '0px', color: "lightgray" }} />
                                                        <FontAwesomeIcon icon={faCaretDown} style={{ position: "absolute", top: "8px", right: '0px', color: "lightgray" }} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className='d-flex justify-content-between align-items-center' style={{ position: "relative" }}>
                                                    <div>
                                                        Join Date
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCaretUp} style={{ position: "absolute", top: "0", right: '0px', color: "lightgray" }} />
                                                        <FontAwesomeIcon icon={faCaretDown} style={{ position: "absolute", top: "8px", right: '0px', color: "lightgray" }} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className='d-flex justify-content-between align-items-center' style={{ position: "relative" }}>
                                                    <div>
                                                        Role
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCaretUp} style={{ position: "absolute", top: "0", right: '0px', color: "lightgray" }} />
                                                        <FontAwesomeIcon icon={faCaretDown} style={{ position: "absolute", top: "8px", right: '0px', color: "lightgray" }} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className='d-flex justify-content-between align-items-center' style={{ position: "relative" }}>
                                                    <div>
                                                        Action
                                                    </div>
                                                    <div>
                                                        <FontAwesomeIcon icon={faCaretUp} style={{ position: "absolute", top: "0", right: '0px', color: "lightgray" }} />
                                                        <FontAwesomeIcon icon={faCaretDown} style={{ position: "absolute", top: "8px", right: '0px', color: "lightgray" }} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {displayedData.map((el, index) => <tr key={index}>
                                            <td>
                                                <img src={el.src} height="25px" width="25px"
                                                    className='rounded-circle mr-1' /><span className='mx-2'>{el.username}</span> <span>{el.designation}</span>
                                            </td>
                                            <td>{el.employeeid}</td>
                                            <td>{el.email}</td>
                                            <td>{el.phone}</td>
                                            <td>{el.joiningdate}</td>

                                            <td>
                                            
                                            <select style={{borderRadius:"25px"}}>
                                                <option>Web Developer</option>
                                                <option >Android Developer</option>
                                                <option >IOS Developer</option>
                                                <option >Team Leader</option>
                                            </select>
                                            
                                            </td>

                                            <td><button class="btn custom-dropdown-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ float: "right" }}>
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </button>
                                                <ul class="dropdown-menu dropdown-content" >
                                                    <li><a href="#" onClick={() => openEditModal(index)}><FontAwesomeIcon icon={faPen} />Edit</a></li>
                                                    <li><a href="#"><FontAwesomeIcon icon={faTrashAlt} />Delete</a></li>
                                                </ul>
                                            </td>
                                        </tr>)
                                        }
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col d-flex justify-content-end'>

                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                    <ul className='pagination'>
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <a className='page-link' href='#' onClick={() => handlePageChange(currentPage - 1)}>
                                            <span aria-hidden='true' style={{ color: 'orange' }}>&laquo;</span>
                                            </a>
                                        </li>
                                        
                                        {[...Array(totalPages).keys()].map((page) => (
                                            <li key={page} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                                            <a className='page-link' href='#' onClick={() => handlePageChange(page + 1)} style={{backgroundColor:"orange",color:"white"}}>
                                                {page + 1}
                                            </a>
                                            </li>
                                        ))}

                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <a className='page-link' href='#' onClick={() => handlePageChange(currentPage + 1)}>
                                            <span aria-hidden='true' style={{ color: 'orange' }}>&raquo;</span>
                                            </a>
                                        </li>
                                        </ul>

                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>)

                }

            </div>
            {isEditModalOpen && (
                <ModalComponent2 isOpen={isEditModalOpen} onClose={closeEditModal} employeeData={employeeToEdit} />
            )}
            {isModalOpen && (
                <ModalComponent isOpen={isModalOpen} onClose={closeModal} />
            )}

        </>
    )
}

export default App;