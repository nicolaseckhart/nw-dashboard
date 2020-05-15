import * as React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

interface Props {
  linkTo: string;
  text: string;
  icon: string;
}

export const NavItem: React.FC<Props> = ({ text, icon, linkTo }: Props) => (
  <Link to={linkTo}>
    <Nav.Item className="mr-5">
      {text}
      <span className={`jam jam-${icon} ml-2`} />
    </Nav.Item>
  </Link>
);
