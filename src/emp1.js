import React ,{useState}from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisV,faPen,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from './modal';
import Nav from './nav';
import ModalComponent2 from './modaledit ';
import { Dropdown } from 'react-bootstrap';



const App=()=>{

    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const[dropdown,setDropdown]=useState(false);
    const [employeeToEdit, setEmployeeToEdit] = useState(null);

       const toggleDropdown=()=>{
         setDropdown(true);
       }

        const openEditModal = (index) => {
            setEditModalOpen(true);
            setEmployeeToEdit(data[index]);
          };
        
        const closeEditModal = () => {
            setEditModalOpen(false);
          };
        

    const data=[
        {firstname:"John",
        lastname:"Doe",
        username:"John Doe",
        email:"johndoe@gmail.com",
        password:"johndoe@",
        confirmpassword:"johndoe@",
        employeeid:"FT-0001",
        joiningdate:"01-01-2022",
        phone:"7836956783",
        company:"Global Technologies",
        department:"Development",
        designation:"Web designer",
        src:"/mimg1.jpg"},

        {firstname:"Richard",
        lastname:"Miles",
        username:"Richard Miles",
        email:"RichardMiles@gmail.com",
        password:"richardmiles@",
        confirmpassword:"richardmiles@",
        employeeid:"FT-0002",
        joiningdate:"01-02-2022",
        phone:"9854309945",
        company:"Global Technologies",
        department:"Development",
        designation:"Web developer",
        src:"/mimg2.jpg"},

        {firstname:"John",
        lastname:"Smith",
        username:"John Smith",
        email:"johnsmith@gmail.com",
        password:"johnsmith@",
        confirmpassword:"johnsmith@",
        employeeid:"FT-0003",
        joiningdate:"01-03-2022",
        phone:"7836958963",
        company:"Global Technologies",
        department:"Development",
        designation:"Android developer",
        src:"mimg3.jpg"},

        {firstname:"Mike",
        lastname:"Litorus",
        username:"Mike Litorus",
        email:"mikelitorus@gmail.com",
        password:"mikelitorus@",
        confirmpassword:"mikelitorus@",
        employeeid:"FT-0004",
        joiningdate:"01-04-2022",
        phone:"7854686783",
        company:"Global Technologies",
        department:"Development",
        designation:"IOS developer",
        src:"mimg4.jpg"},
        
        {firstname:"Wilmer",
        lastname:"Deluna",
        username:"Wilmer deluna",
        email:"wilmerdeluna@gmail.com",
        password:"wilmerdeluna@",
        confirmpassword:"wilmerdeluna@",
        employeeid:"FT-0005",
        joiningdate:"01-05-2022",
        phone:"7836945373",
        company:"Global Technologies",
        department:"Development",
        designation:"Team Leader",
        src:"mimg5.jpg"},

        {firstname:"Jeffrey",
        lastname:"Warden",
        username:"Jeffrey Warden",
        email:"jeffrey@gmail.com",
        password:"jeffrey@",
        confirmpassword:"jeffrey@",
        employeeid:"FT-0006",
        joiningdate:"01-06-2022",
        phone:"789807783",
        company:"Global Technologies",
        department:"Development",
        designation:"Web developer",
        src:"mimg6.jpg"},

        {firstname:"Bernardo",
        lastname:"Galaviz",
        username:"Bernardo Galaviz",
        email:"bernardo@gmail.com",
        password:"bernardo@",
        confirmpassword:"bernardo@",
        employeeid:"FT-0007",
        joiningdate:"01-07-2022",
        phone:"7836978473",
        company:"Global Technologies",
        department:"Development",
        designation:"Web developer",
        src:"mimg7.jpg"},

        {firstname:"Lesley",
        lastname:"Grauer",
        username:"Lesley Grauer",
        email:"lesley@gmail.com",
        password:"lesley@",
        confirmpassword:"lesley@",
        employeeid:"FT-0008",
        joiningdate:"01-08-2022",
        phone:"7836956783",
        company:"Global Technologies",
        department:"Development",
        designation:"Team Leader",
        src:"gimg1.jpg"},

        {firstname:"Jeffrey",
        lastname:"Lalor",
        username:"Jeffrey Lalor",
        email:"lalor@gmail.com",
        password:"lalor@",
        confirmpassword:"lalor@",
        employeeid:"FT-0009",
        joiningdate:"01-09-2022",
        phone:"7836956783",
        company:"Global Technologies",
        department:"Development",
        designation:"Team Leader",
        src:"mimg8.jpg"},

        {firstname:"Loren",
        lastname:"Gatlin",
        username:"Loren Gatlin",
        email:"loren@gmail.com",
        password:"gatlin@",
        confirmpassword:"gatlin@",
        employeeid:"FT-0010",
        joiningdate:"01-10-2022",
        phone:"7836956783",
        company:"Global Technologies",
        department:"Development",
        designation:"Android developer",
        src:"gimg2.jpg"},

        {firstname:"Tarah",
        lastname:"shroff",
        username:"Tarah Shroff",
        email:"tarah@gmail.com",
        password:"tarahs@",
        confirmpassword:"tarahs@",
        employeeid:"FT-0011",
        joiningdate:"01-11-2022",
        phone:"7836956783",
        company:"Global Technologies",
        department:"Development",
        designation:"Android developer",
        src:"gimg3.jpg"},

        {firstname:"Catherine",
        lastname:"Mathew",
        username:"Catherine Mathew",
        email:"cathy@gmail.com",
        password:"cathy@",
        confirmpassword:"cathy@",
        employeeid:"FT-0012",
        joiningdate:"01-12-2022",
        phone:"7836952363",
        company:"Global Technologies",
        department:"Development",
        designation:"Android developer",
        src:"gimg4.jpg"},

    ]

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
      };

    return(
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
                        <ul className='d-flex flex-row justify-content-between align-items-center' style={{listStyleType:"none"}}>
                            <li className="">
                                    <div className='shadow border d-flex justify-content-center align-items-center' style={{width:"30px",height:"30px"}}>
                                    <img src="/iconbox.png" height={"15px"} width={"15px"} />
                                    </div>
                            </li>
                            <li className='ms-3'>
                                <div className='shadow border d-flex justify-content-center align-items-center' style={{ cursor: 'pointer', padding: '10px',width:"30px",height:"30px" }}>
                                    <FontAwesomeIcon icon={faBars} style={{color:"grey"}}/>
                                </div></li>
                            <li className='ms-3'>
                            <button type="button" className="btn px-4" style={{backgroundColor:"orange",color:"white",borderRadius:"25px"}} onClick={openModal}>
                                + Add Employee
                            </button>
                        
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
            <div class="container-fixed mx-3 mt-4 ">
                <div class="row justify-content-between row-gap-1">
                    <div class="col-12 col-md-3">
                    <input type="text" class="form-control" placeholder="Employee ID"/>
                    </div>
                    <div class="col-12 col-md-3">
                    <input type="text" class="form-control" placeholder="Employee Name"/>
                    </div>
                    <div className="col-12 col-md-3">
                    <div class="dropdown">
            
                        <button class="btn border px-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width:"300px"}}>
                          Select Designation
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item active" href="#">Web Developer</a></li>
                            <li><a class="dropdown-item" href="#">Android Developer</a></li>
                            <li><a class="dropdown-item" href="#">Team Leader</a></li>
                        </ul>
                
                    </div>
                    </div>
                    <div class="col-12 col-md-3">
                    <button className='btn ' style={{backgroundColor:"lightgreen",color:"white",width:"350px",height:"35px"}}><strong>Search</strong></button>
                    </div>
                </div>
            </div>

             <div className='container-fixed mt-3'>
                <div class="row row-cols-1 row-cols-md-2  row-cols-lg-4 " style={{ marginRight: '-1px', marginLeft: '-1px' }}>
                    {data &&  data.map((el,index)=>
                    <div key={index} className={`col mb-4 ${index > 3 ? 'col-lg-3' : ''}`}>
                    <div class="col border rounded mx-2 custom-div d-flex flex-column justify-content-center align-items-center" style={{height:"140px",width:"350px"}}>
                        <img src={el.src}  width="60px" height="60px" className='mb-2 rounded-circle'/>
                        <h6>{el.username}</h6>
                        <p>{el.designation}</p>

                        <div className="dropdown" style={{position:"absolute",top:"0",right:"10px"}}>
                            <FontAwesomeIcon icon={faEllipsisV} className="dropdown-icon" onClick={toggleDropdown}
                            />
                            {dropdown && (
                                <div className="dropdown-content">
                                <a href="#" onClick={()=>openEditModal(index)}><FontAwesomeIcon icon={faPen}/>Edit</a> 
                                <a href="#"><FontAwesomeIcon icon={faTrashAlt}/>Delete</a>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>)}
                
                </div>    
             </div>
            
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