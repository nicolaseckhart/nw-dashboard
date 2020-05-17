import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface Props {
  shownState: boolean;
  title: string;
  submitText: string;
  submitFn: () => void;
  closeText: string;
  closeFn: () => void;
  renderBodyFn: () => any;
}

export const FormModal: React.FC<Props> = ({
  shownState,
  title,
  submitText,
  submitFn,
  closeText,
  closeFn,
  renderBodyFn,
}: Props) => (
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
