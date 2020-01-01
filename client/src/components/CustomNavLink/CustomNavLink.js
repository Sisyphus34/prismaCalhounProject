import React from 'react';
import { useLocation } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';

const CustomNavLink = ({ children, to, exact }) => {
  const { pathname } = useLocation();

  return (
    <LinkContainer to={to} exact={exact}>
      <Nav.Link active={pathname === to}>{children}</Nav.Link>
    </LinkContainer>
  );
};

export default CustomNavLink;
