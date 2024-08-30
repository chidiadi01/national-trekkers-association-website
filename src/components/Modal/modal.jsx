import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const FictionModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    handleShow();
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attention!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please note that the stories on this page are products of my imagination, and are not historical facts. <br/> <b>~ Chidiadi</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FictionModal;
