import * as React from 'react';
import { Col } from 'react-bootstrap';

interface Props {
  name: string;
  action: () => void;
  resetFilter?: boolean;
}

export const CommandFilter: React.FC<Props> = ({ name, action, resetFilter }: Props) => (
  <Col md={{ span: 3 }}>
    <div className={`command-preset ${resetFilter ? 'reset-command' : ''}`} onClick={action}>
      {name}
    </div>
  </Col>
);
