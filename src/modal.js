import React,{useEffect} from 'react';
import { Form } from 'react-bootstrap';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ModalComponent = ({ isOpen, onClose }) => {

    if (!isOpen) return null;
    
    
  return (
    <div className={`modal fade modal-lg  ${isOpen ? 'show' : ''}`}  style={{ display: isOpen ? 'block' : 'none' }} >
      <div className="modal-dialog">
        <div className="modal-content">
          
          
          <div className='text-center mt-4'>
               <h3>Add Employee</h3>
          </div>
        
          <FontAwesomeIcon className="closeicon" icon={faTimes} style={{ color: 'orange', fontSize: '2em' }} onClick={onClose}/>
          
          <div className="modal-body">
          <Form>
            <div  className='row'>
                    <div className='col'>
                    <Form.Group >
                            <Form.Label>First Name<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="text"
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
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
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group>
                            <Form.Label>Email<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="email"
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
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
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
                            />
                            </Form.Group>
                    </div>
                     <div className='col'>
                        <Form.Group >
                            <Form.Label>Joining Date<span style={{color:"#ff7f20"}}>*</span></Form.Label>
                            <Form.Control
                                type="date"
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
                            </Form.Control>
                        </Form.Group>
                     </div>
             </div>
          </Form>

          <hr/>

          <div className='row'>
                <div className='col'>
                    <table className='table table-striped  '>
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
                <button className='btn px-5 mb-3' style={{backgroundColor:"orange",color:"white",borderRadius:"25px"}}>Submit</button>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default ModalComponent;

