import React,{useEffect,useState} from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


const ModalComponent2 = ({ isOpen, onClose ,employeeData}) => {

        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            username:'',
            email:'',
            password:'',
            confirmpassword:'',
            employeeid:'',
            joiningdate:'',
            phone:'',
            company:'',
            department:'',
            designation:'',
            src:''
            });
      
        useEffect(() => {
          if (isOpen && employeeData) {
            setFormData({
              firstName: employeeData.firstname || '',
              lastName: employeeData.lastname || '',
              username:employeeData.username ||'',
              email: employeeData.email || '',
              password:employeeData.password|| '',
              confirmpassword:employeeData.confirmpassword|| '',
              employeeid:employeeData.employeeid || '',
              joiningdate:employeeData.joiningdate|| '',
              phone:employeeData.phone|| '',
              company:employeeData.company|| '',
              department:employeeData.department|| '',
              designation:employeeData.designation|| '',
            });
          }
        }, [isOpen, employeeData]);
      

if (!isOpen) return null;

    
  return (
    
    <div className={`modal fade modal-md ${isOpen ? 'show' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          
          
          <div className='text-center mt-4'>
               <h3>Edit Employee</h3>
          </div>

          <FontAwesomeIcon className="closeicon" 
          icon={faTimes} style={{ color: 'orange', fontSize: '2em' }} 
          onClick={onClose}
          />
          

          <div className="modal-body">
          <Form>
            <div  className='row'>
                    <div className='col'>
                    <Form.Group >
                            <Form.Label>First Name<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.firstName}
                               onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />
                        </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.lastName}
                               onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            />
                            </Form.Group>
                     </div>
             </div>

             <div  className='row'>
                    <div className='col'>
                    <Form.Group >
                            <Form.Label>User Name<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.username}
                               onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group>
                            <Form.Label>Email<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="email"
                                value={formData.email}
                               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                            </Form.Group>
                     </div>
             </div>

             <div  className='row'>
                    <div className='col'>
                    <Form.Group >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={formData.password}
                               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={formData.confirmpassword}
                               onChange={(e) => setFormData({ ...formData, confirmpassword: e.target.value })}
                            />
                            </Form.Group>
                     </div>
             </div>

             <div  className='row'>
                    <div className='col'>
                    <Form.Group >
                            <Form.Label>Employee ID<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.employeeid}
                               onChange={(e) => setFormData({ ...formData, employeeid: e.target.value })}
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Joining Date<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="date"
                                value={formData.joiningdate}
                               onChange={(e) => setFormData({ ...formData, joiningdate: e.target.value })}
                            />
                            </Form.Group>
                     </div>
             </div>

             <div  className='row'>
                    <div className='col'>
                    <Form.Group >
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                value={formData.phone}
                               onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Company</Form.Label>
                            <Form.Control as="select">
                            <option value="option1">Global Technologies</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            </Form.Control>
                            </Form.Group>
                     </div>
             </div>

             <div  className='row'>
                    <div className='col'>
                    <Form.Group >
                            <Form.Label>Department<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control as="select">
                            <option value="option1">Select Department</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            </Form.Control>
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Designation<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control as="select">
                            <option value="option1">Select Designation</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            </Form.Control>
                        </Form.Group>
                     </div>
             </div>
          </Form>

          <hr/>

          <div className='row'>
                <div className='col'>
                    <table className='table table-striped  custom-table'>
                        <thead>
                        <tr className='text-bold'>
                            <th>Module permission</th>
                            <th>Read</th>
                            <th>Write</th>
                            <th>Create</th>
                            <th>Delete</th>
                            <th>Import</th>
                            <th>Export</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Holidays</td>
                            <td><input type="checkbox" style={{background:"orange",color:"white"}}/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            
                        </tr>
                        <tr>
                            <td>Leaves</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>Clients</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                      </tr>
                        <tr>
                            <td>Projects</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            
                        </tr>
                        <tr>
                            <td>Tasks</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>

                        </tr>
                        <tr>
                            <td>Chats</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            
                        </tr>
                        <tr>
                            <td>Assets</td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>

                        </tr>
                        <tr>
                            <td>Timing Sheets</td>
                            <td><input type="checkbox" style={{backgroundColor:"orange",color:"white"}}/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>
                            <td><input type="checkbox"/></td>

                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <button className='btn px-5 mb-3' style={{backgroundColor:"orange",color:"white",borderRadius:"25px"}}>Save</button>
            </div>
          </div>



        </div>
      </div>
    </div>
    
  );
};

export default ModalComponent2;

