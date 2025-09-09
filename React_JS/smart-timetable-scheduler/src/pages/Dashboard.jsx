import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const dashboardCards = [
    {
      title: "Data Input",
      description: "Input classroom, faculty, subject, and student data",
      icon: "📊",
      route: "/data-input",
      color: "primary"
    },
    {
      title: "Generate Timetable",
      description: "Create optimized timetables using AI algorithms",
      icon: "🤖",
      route: "/generate-timetable",
      color: "success"
    },
    {
      title: "View Timetables",
      description: "Review and analyze generated timetables",
      icon: "📅",
      route: "/view-timetable",
      color: "info"
    },
    {
      title: "Approval Workflow",
      description: "Review and approve timetable proposals",
      icon: "✅",
      route: "/approval",
      color: "warning"
    }
  ];

  const stats = [
    { label: "Total Classrooms", value: "45", color: "primary" },
    { label: "Active Faculty", value: "120", color: "success" },
    { label: "Total Students", value: "2,400", color: "info" },
    { label: "Pending Approvals", value: "3", color: "warning" }
  ];

  return (
    <Container className="mt-4">
      <Row className="mb-5">
        <Col>
          <div className="text-center fade-in-up">
            <h1 className="display-4 text-white mb-3" style={{fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              📊 Dashboard
            </h1>
            <p className="lead text-white-75" style={{fontSize: '1.2rem'}}>
              Welcome to Smart Classroom & Timetable Scheduler
            </p>
          </div>
        </Col>
      </Row>

      {/* Statistics Cards */}
      <Row className="mb-5">
        {stats.map((stat, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card className={`text-white gradient-${stat.color} border-0 h-100 pulse-animation`} 
                  style={{animationDelay: `${index * 0.2}s`}}>
              <Card.Body className="text-center p-4">
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>
                  {stat.color === 'primary' && '🏫'}
                  {stat.color === 'success' && '👨‍🏫'}
                  {stat.color === 'info' && '👥'}
                  {stat.color === 'warning' && '⏳'}
                </div>
                <Card.Title className="h1 mb-2" style={{fontWeight: '800'}}>{stat.value}</Card.Title>
                <Card.Text style={{fontSize: '1.1rem', fontWeight: '600'}}>{stat.label}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Action Cards */}
      <Row className="mb-5">
        {dashboardCards.map((card, index) => (
          <Col md={6} lg={3} key={index} className="mb-4">
            <Card className="h-100 border-0 slide-in-right" 
                  style={{animationDelay: `${index * 0.1}s`}}>
              <Card.Body className="text-center p-4 d-flex flex-column">
                <div style={{ fontSize: '4rem' }} className="mb-3 pulse-animation">
                  {card.icon}
                </div>
                <Card.Title className="h4 mb-3" style={{fontWeight: '700', color: '#333'}}>
                  {card.title}
                </Card.Title>
                <Card.Text className="flex-grow-1 mb-4" style={{color: '#666'}}>
                  {card.description}
                </Card.Text>
                <Button
                  variant={card.color}
                  onClick={() => navigate(card.route)}
                  className="mt-auto"
                  style={{borderRadius: '50px', fontWeight: '600'}}
                >
                  <span style={{marginRight: '8px'}}>✨</span>
                  Go to {card.title}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Recent Activity */}
      <Row>
        <Col>
          <Card className="border-0 fade-in-up">
            <Card.Header className="border-0">
              <h4 className="mb-0" style={{fontWeight: '700', color: '#333'}}>
                <span style={{marginRight: '10px'}}>🕒</span>
                Recent Activity
              </h4>
            </Card.Header>
            <Card.Body className="p-4">
              <div className="activity-timeline">
                <div className="activity-item">
                  <div className="activity-icon gradient-success">
                    ✓
                  </div>
                  <div>
                    <strong style={{color: '#333'}}>New timetable generated</strong>
                    <br />
                    <span style={{color: '#666'}}>Computer Science Department - 09:30 AM</span>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon gradient-info">
                    📝
                  </div>
                  <div>
                    <strong style={{color: '#333'}}>Faculty availability updated</strong>
                    <br />
                    <span style={{color: '#666'}}>Prof. Smith - 08:45 AM</span>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon gradient-primary">
                    ✅
                  </div>
                  <div>
                    <strong style={{color: '#333'}}>Semester timetable approved</strong>
                    <br />
                    <span style={{color: '#666'}}>Mathematics Department - Yesterday</span>
                  </div>
                </div>
                
                <div className="activity-item">
                  <div className="activity-icon gradient-warning">
                    🏫
                  </div>
                  <div>
                    <strong style={{color: '#333'}}>Room capacity updated</strong>
                    <br />
                    <span style={{color: '#666'}}>Lab-101 - Yesterday</span>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
