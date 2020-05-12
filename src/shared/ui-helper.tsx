import React from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Nav } from 'react-bootstrap';

export function navItem(linkTo: string, text: string, icon: string) {
  return (
    <Link to={linkTo}>
      <Nav.Item className="mr-5">
        {text}
        <span className={`jam jam-${icon} ml-2`} />
      </Nav.Item>
    </Link>
  );
}

export function renderModal(
  shownState: boolean,
  title: string,
  submitText: string,
  submitFn: () => void,
  closeText: string,
  closeFn: () => void,
  renderBodyFn: () => any,
) {
  return (
    <Modal show={shownState} onHide={closeFn}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderBodyFn()}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeFn}>
          {closeText}
        </Button>
        <Button variant="primary" onClick={submitFn}>
          {submitText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export function renderNwButton(icon: string, action: () => void) {
  return (
    <div className="nw-button" onClick={action}>
      <span className={`jam jam-${icon}`} />
    </div>
  );
}
