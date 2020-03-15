import * as React from 'react';
import { Spinner } from 'react-bootstrap';

export const Loading: React.FC = () => (
  <div className="w-100 text-center mt-2">
    <Spinner animation="grow" style={{ width: '3rem', height: '3rem' }} />
  </div>
);
