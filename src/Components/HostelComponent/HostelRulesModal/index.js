import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaInfoCircle } from "react-icons/fa";


function HostelRulesModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <>
    
      <Button className='text-white btn fw-semibold text-nowrap d-flex justify-content-center align-items-center gap-1 border-0' onClick={handleShow} style={{backgroundColor: "#081735"}}>
      <FaInfoCircle />Hostel Instructions/Rules
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Hostel Instructions/Rules</Modal.Title>
        </Modal.Header>
        <Modal.Body>1.cctv covored</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default HostelRulesModal;