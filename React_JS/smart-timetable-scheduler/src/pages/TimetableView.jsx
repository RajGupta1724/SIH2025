import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Table, Button, Form, Badge, Alert, Modal } from 'react-bootstrap';

const TimetableView = () => {
  const [selectedTimetable, setSelectedTimetable] = useState(null);
  const [viewMode, setViewMode] = useState('weekly'); // weekly, daily, faculty, room
  const [selectedFilter, setSelectedFilter] = useState('');
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportFormat, setExportFormat] = useState('pdf');

  useEffect(() => {
    // Load selected timetable from localStorage
    const saved = localStorage.getItem('selectedTimetable');
    if (saved) {
      setSelectedTimetable(JSON.parse(saved));
    } else {
      // Create a sample timetable for demonstration
      setSelectedTimetable(createSampleTimetable());
    }
  }, []);

  const createSampleTimetable = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = [
      '09:00-10:00',
      '10:00-11:00', 
      '11:00-12:00',
      '12:00-13:00',
      '14:00-15:00',
      '15:00-16:00',
      '16:00-17:00'
    ];

    const sampleClasses = [
      { subject: 'Data Structures', faculty: 'Dr. John Smith', room: 'Room-101', batch: 'CS-3A', type: 'Theory' },
      { subject: 'Database Lab', faculty: 'Prof. Jane Doe', room: 'Lab-101', batch: 'CS-3B', type: 'Practical' },
      { subject: 'Algorithms', faculty: 'Dr. John Smith', room: 'Room-201', batch: 'CS-3A', type: 'Theory' },
      { subject: 'Web Development', faculty: 'Prof. Jane Doe', room: 'Lab-102', batch: 'CS-3B', type: 'Practical' },
      { subject: 'Machine Learning', faculty: 'Dr. Mike Johnson', room: 'Room-301', batch: 'CS-3A', type: 'Theory' }
    ];

    const schedule = {};
    days.forEach(day => {
      schedule[day] = {};
      timeSlots.forEach((slot, index) => {
        if (slot === '12:00-13:00') {
          schedule[day][slot] = { subject: 'LUNCH BREAK', isBreak: true };
        } else if (Math.random() > 0.3) {
          schedule[day][slot] = sampleClasses[Math.floor(Math.random() * sampleClasses.length)];
        } else {
          schedule[day][slot] = null;
        }
      });
    });

    return {
      id: 1,
      name: "Sample Optimized Timetable",
      description: "Computer Science Department - Semester 3",
      schedule,
      metrics: {
        roomUtilization: 78,
        facultyWorkload: 80,
        studentSatisfaction: 79,
        timeDistribution: 85
      },
      generatedAt: new Date().toISOString()
    };
  };

  const renderWeeklyView = () => {
    if (!selectedTimetable) return null;

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const timeSlots = Object.keys(selectedTimetable.schedule[days[0]] || {});

    return (
      <Table responsive bordered className="timetable-grid">
        <thead>
          <tr>
            <th style={{ width: '120px' }}>Time</th>
            {days.map(day => (
              <th key={day} className="text-center">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map(slot => (
            <tr key={slot}>
              <td className="fw-bold bg-light text-center">{slot}</td>
              {days.map(day => {
                const classData = selectedTimetable.schedule[day][slot];
                return (
                  <td key={`${day}-${slot}`} className="p-1">
                    {classData ? (
                      classData.isBreak ? (
                        <div className="text-center p-3 gradient-warning text-white rounded-3 shadow-sm">
                          <div style={{fontSize: '1.2rem', marginBottom: '5px'}}>🍽️</div>
                          <small className="fw-bold">LUNCH BREAK</small>
                        </div>
                      ) : (
                        <div className="class-cell p-3 gradient-primary text-white shadow-sm">
                          <div className="fw-bold text-truncate mb-1" style={{ fontSize: '0.9rem' }}>
                            {classData.subject}
                          </div>
                          <small className="d-block opacity-75 mb-2">
                            👨‍🏫 {classData.faculty}
                          </small>
                          <div className="d-flex justify-content-between align-items-center mb-1">
                            <Badge bg={classData.type === 'Theory' ? 'light' : 'success'} 
                                   text={classData.type === 'Theory' ? 'dark' : 'light'}
                                   className="small">
                              {classData.type === 'Theory' ? '📚' : '🔬'} {classData.type}
                            </Badge>
                            <small className="opacity-75">🏫 {classData.room}</small>
                          </div>
                          <small className="fw-bold">👥 {classData.batch}</small>
                        </div>
                      )
                    ) : (
                      <div className="text-center p-3 glass-effect">
                        <div style={{fontSize: '1.5rem', opacity: '0.5', marginBottom: '5px'}}>💤</div>
                        <small className="text-muted fw-bold">Free Slot</small>
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  const renderFacultyView = () => {
    if (!selectedTimetable) return null;

    const facultySchedules = {};
    const days = Object.keys(selectedTimetable.schedule);
    
    // Extract faculty schedules
    days.forEach(day => {
      Object.entries(selectedTimetable.schedule[day]).forEach(([time, classData]) => {
        if (classData && !classData.isBreak) {
          if (!facultySchedules[classData.faculty]) {
            facultySchedules[classData.faculty] = {};
          }
          if (!facultySchedules[classData.faculty][day]) {
            facultySchedules[classData.faculty][day] = {};
          }
          facultySchedules[classData.faculty][day][time] = classData;
        }
      });
    });

    return (
      <div>
        {Object.entries(facultySchedules).map(([faculty, schedule]) => (
          <Card key={faculty} className="mb-4">
            <Card.Header>
              <h6 className="mb-0">{faculty}</h6>
            </Card.Header>
            <Card.Body>
              <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>Time</th>
                    {days.map(day => <th key={day}>{day}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(selectedTimetable.schedule[days[0]]).map(time => (
                    <tr key={time}>
                      <td className="fw-bold">{time}</td>
                      {days.map(day => {
                        const classData = schedule[day]?.[time];
                        return (
                          <td key={day}>
                            {classData ? (
                              <div>
                                <small className="fw-bold">{classData.subject}</small>
                                <br />
                                <small className="text-muted">{classData.room} - {classData.batch}</small>
                              </div>
                            ) : (
                              <small className="text-muted">Free</small>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  const renderRoomView = () => {
    if (!selectedTimetable) return null;

    const roomSchedules = {};
    const days = Object.keys(selectedTimetable.schedule);
    
    // Extract room schedules
    days.forEach(day => {
      Object.entries(selectedTimetable.schedule[day]).forEach(([time, classData]) => {
        if (classData && !classData.isBreak) {
          if (!roomSchedules[classData.room]) {
            roomSchedules[classData.room] = {};
          }
          if (!roomSchedules[classData.room][day]) {
            roomSchedules[classData.room][day] = {};
          }
          roomSchedules[classData.room][day][time] = classData;
        }
      });
    });

    return (
      <div>
        {Object.entries(roomSchedules).map(([room, schedule]) => (
          <Card key={room} className="mb-4">
            <Card.Header>
              <h6 className="mb-0">{room}</h6>
            </Card.Header>
            <Card.Body>
              <Table responsive bordered size="sm">
                <thead>
                  <tr>
                    <th>Time</th>
                    {days.map(day => <th key={day}>{day}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(selectedTimetable.schedule[days[0]]).map(time => (
                    <tr key={time}>
                      <td className="fw-bold">{time}</td>
                      {days.map(day => {
                        const classData = schedule[day]?.[time];
                        return (
                          <td key={day}>
                            {classData ? (
                              <div>
                                <small className="fw-bold">{classData.subject}</small>
                                <br />
                                <small className="text-muted">{classData.faculty} - {classData.batch}</small>
                              </div>
                            ) : (
                              <small className="text-muted">Available</small>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  };

  const handleExport = () => {
    // Simulate export functionality
    setShowExportModal(false);
    alert(`Timetable exported as ${exportFormat.toUpperCase()} format!`);
  };

  const getUtilizationColor = (percentage) => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <div className="fade-in-up">
              <h1 className="display-5 text-white mb-3" style={{fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                📅 Timetable View
              </h1>
              <p className="lead text-white-75">Review and analyze generated timetables</p>
            </div>
            <div>
              <Button 
                variant="success" 
                className="me-2"
                onClick={() => setShowExportModal(true)}
                disabled={!selectedTimetable}
              >
                Export Timetable
              </Button>
              <Button variant="outline-primary">
                Print
              </Button>
            </div>
          </div>
        </Col>
      </Row>

      {selectedTimetable ? (
        <>
          {/* Timetable Info */}
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <h5>{selectedTimetable.name}</h5>
                      <p className="text-muted mb-1">{selectedTimetable.description}</p>
                      <small className="text-muted">
                        Generated: {new Date(selectedTimetable.generatedAt).toLocaleString()}
                      </small>
                    </Col>
                    <Col md={4}>
                      <div className="text-end">
                        <div className="mb-2">
                          <Badge bg={getUtilizationColor(selectedTimetable.metrics.roomUtilization)} className="me-2">
                            Room Utilization: {selectedTimetable.metrics.roomUtilization}%
                          </Badge>
                        </div>
                        <div className="mb-2">
                          <Badge bg={getUtilizationColor(selectedTimetable.metrics.facultyWorkload)} className="me-2">
                            Faculty Load: {selectedTimetable.metrics.facultyWorkload}%
                          </Badge>
                        </div>
                        <div>
                          <Badge bg={getUtilizationColor(selectedTimetable.metrics.studentSatisfaction)}>
                            Student Satisfaction: {selectedTimetable.metrics.studentSatisfaction}%
                          </Badge>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* View Controls */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>View Mode</Form.Label>
                <Form.Select value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
                  <option value="weekly">Weekly View</option>
                  <option value="faculty">Faculty-wise View</option>
                  <option value="room">Room-wise View</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Filter</Form.Label>
                <Form.Select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
                  <option value="">All Classes</option>
                  <option value="theory">Theory Classes Only</option>
                  <option value="practical">Practical Classes Only</option>
                  <option value="cs">Computer Science</option>
                  <option value="math">Mathematics</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/* Timetable Display */}
          <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h5 className="mb-0">
                    {viewMode === 'weekly' && 'Weekly Schedule'}
                    {viewMode === 'faculty' && 'Faculty-wise Schedule'}
                    {viewMode === 'room' && 'Room-wise Schedule'}
                  </h5>
                </Card.Header>
                <Card.Body className="p-0">
                  {viewMode === 'weekly' && renderWeeklyView()}
                  {viewMode === 'faculty' && renderFacultyView()}
                  {viewMode === 'room' && renderRoomView()}
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Statistics */}
          <Row className="mt-4">
            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h4 className="text-primary">{selectedTimetable.metrics.roomUtilization}%</h4>
                  <small className="text-muted">Room Utilization</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h4 className="text-success">{selectedTimetable.metrics.facultyWorkload}%</h4>
                  <small className="text-muted">Faculty Workload Balance</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h4 className="text-info">{selectedTimetable.metrics.studentSatisfaction}%</h4>
                  <small className="text-muted">Student Satisfaction</small>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="text-center">
                <Card.Body>
                  <h4 className="text-warning">{selectedTimetable.metrics.timeDistribution}%</h4>
                  <small className="text-muted">Time Distribution</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      ) : (
        <Alert variant="info" className="text-center">
          <h5>No Timetable Selected</h5>
          <p>Please generate a timetable first using the "Generate Timetable" section.</p>
        </Alert>
      )}

      {/* Export Modal */}
      <Modal show={showExportModal} onHide={() => setShowExportModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Export Timetable</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Export Format</Form.Label>
              <Form.Select value={exportFormat} onChange={(e) => setExportFormat(e.target.value)}>
                <option value="pdf">PDF Document</option>
                <option value="excel">Excel Spreadsheet</option>
                <option value="csv">CSV File</option>
                <option value="json">JSON Data</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Include in Export</Form.Label>
              <div>
                <Form.Check type="checkbox" label="Weekly Schedule" defaultChecked />
                <Form.Check type="checkbox" label="Faculty Schedule" defaultChecked />
                <Form.Check type="checkbox" label="Room Schedule" defaultChecked />
                <Form.Check type="checkbox" label="Statistics & Metrics" defaultChecked />
                <Form.Check type="checkbox" label="Optimization Details" />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowExportModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleExport}>
            Export
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default TimetableView;
