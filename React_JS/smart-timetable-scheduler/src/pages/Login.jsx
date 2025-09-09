import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple authentication check (in real app, this would be against a backend)
    if (credentials.username === 'admin' && credentials.password === 'password') {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', 'admin');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Use admin/password for demo.');
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center p-4">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={4}>
            <div className="text-center mb-4 fade-in-up">
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎓</div>
              <h1 className="text-white mb-2" style={{fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                Smart Timetable
              </h1>
              <p className="text-white-50" style={{fontSize: '1.1rem'}}>Intelligent Scheduling Solution</p>
            </div>
            
            <Card className="glass-effect border-0 slide-in-right">
              <Card.Body className="p-4">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                    required
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    required
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">
                  Login
                </Button>
              </Form>
              
              <div className="mt-3 text-center">
                <small className="text-muted">
                  Demo credentials: admin / password
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Login;
