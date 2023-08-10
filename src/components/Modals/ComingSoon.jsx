import React from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";

function ComingSoon(props) {
  const navigate = useNavigate();
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4 className="text-xl text-indigo-700">Coming Soon</h4>
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body closeButton>
        <p className="text-base text-center pt-5 text-xl text-indigo-700">
        Coming Soon
          {/* <br />
          <small className="text-red-800">(This action is permanent, there is no going back!)</small>
          Sign in to continue */}
        </p>
        <p className="text-center py-5 text-gray-700">This feature is currently unavailable</p>
      </Modal.Body>
      {/* <Modal.Footer>
        <button
          class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
          onClick={props.onDelete}
        >
          Delete
        </button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ComingSoon;
