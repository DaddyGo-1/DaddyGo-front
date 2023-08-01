import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router';


function NotificationModal(props) {

  const navigate = useNavigate()
    return (
        <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
         <Modal.Title id="contained-modal-title-vcenter">
         <h4 className='text-xl text-indigo-600'>Request Recieved</h4>
        </Modal.Title> 
      </Modal.Header >
      <Modal.Body closeButton>

        <p className='text-base'>
          Your request for Admin privileges has been recieved and is being processed. Please check back to see if it has been approved. 
          <br/>
          {/* Sign in to continue */}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button className="text-white bg-indigo-600 hover:bg-indigo-500 font-medium rounded-lg text-md px-10 py-2 text-center mr-2  dark:bg-indigo-600 dark:hover:bg-indigo-700"
        onClick={()=>{
          navigate('/')
        }}
        >Back to home</button>
      </Modal.Footer>
    </Modal>
    );
}

export default NotificationModal;