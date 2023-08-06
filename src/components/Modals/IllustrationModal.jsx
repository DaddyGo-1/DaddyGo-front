import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router";
import iphoneIllustrate from '../../assets/images/illustration-iphone.jpg';
import androidIllustrate from '../../assets/images/illustrate-android.jpg';

function IllustrationModal(props) {
//   const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* <h4 className="text-xl text-red-500">Delete Post?</h4> */}
          <p className="text-base text-gray-500">Sadly, the automatic install function is not supported on your browser, but below are device specific guides to help you install Axix manually.</p>
        </Modal.Title>
        {/* <div className='tabHeader'>
        <div className={toggleState === 0 ? "tabActive" : ""} onClick={() => toggleTab(0)}>Android</div>
        <div className={toggleState === 1 ? "tabActive" : ""} onClick={() => toggleTab(1)}>iOS</div>
      </div> */}
      </Modal.Header>
      <Modal.Body closeButton>
      <ul class="grid grid-flow-col text-center text-gray-500 bg-gray-100 rounded-lg p-1">
  <li>
    <div  className={`flex justify-center py-2 ${toggleState === 0 ? "bg-indigo-600 rounded-lg shadow text-white" : ""}` } onClick={() => toggleTab(0)}>Android</div>
  </li>
  <li>
    <div className={`flex justify-center py-2 ${toggleState === 1 ? "bg-indigo-600 rounded-lg shadow text-white" : ""}` } onClick={() => toggleTab(1)}>iOS</div>
  </li>

</ul>
<div className={toggleState === 0 ? "block" : "hidden"}>
        <img src={androidIllustrate}className="block  mx-auto mt-5" alt=""  style={{width: '60%'}}/>
    </div>
    <div className={toggleState === 1 ? "block" : "hidden"}>
        <img src={iphoneIllustrate}className="block mx-auto mt-5" alt="" />
    </div>

      
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

export default IllustrationModal;
