import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="mb-4 shadow-lg">
      <Container>
        <Navbar.Brand onClick={() => navigate('/dashboard')} style={{cursor: 'pointer'}}>
          <span style={{marginRight: '10px', fontSize: '1.5rem'}}>🎓</span>
          Smart Timetable Scheduler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/dashboard')}>
              <span style={{marginRight: '8px'}}>📊</span>
              Dashboard
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/data-input')}>
              <span style={{marginRight: '8px'}}>📋</span>
              Data Input
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/generate-timetable')}>
              <span style={{marginRight: '8px'}}>🤖</span>
              Generate
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/view-timetable')}>
              <span style={{marginRight: '8px'}}>📅</span>
              View Timetable
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/approval')}>
              <span style={{marginRight: '8px'}}>✅</span>
              Approval
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate('/')} style={{color: '#ff6b6b !important'}}>
              <span style={{marginRight: '8px'}}>🚪</span>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
