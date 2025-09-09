import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Tab, Tabs, Table, Modal } from 'react-bootstrap';

const DataInput = () => {
  const [activeTab, setActiveTab] = useState('classrooms');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // Sample data states
  const [classrooms, setClassrooms] = useState([
    { id: 1, name: 'Room-101', capacity: 60, type: 'Classroom', department: 'Computer Science' },
    { id: 2, name: 'Lab-101', capacity: 30, type: 'Laboratory', department: 'Computer Science' },
    { id: 3, name: 'Room-201', capacity: 80, type: 'Classroom', department: 'Mathematics' }
  ]);

  const [faculty, setFaculty] = useState([
    { id: 1, name: 'Dr. John Smith', department: 'Computer Science', subjects: ['Data Structures', 'Algorithms'], maxHours: 20 },
    { id: 2, name: 'Prof. Jane Doe', department: 'Mathematics', subjects: ['Calculus', 'Linear Algebra'], maxHours: 18 },
    { id: 3, name: 'Dr. Mike Johnson', department: 'Physics', subjects: ['Quantum Mechanics', 'Thermodynamics'], maxHours: 16 }
  ]);

  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Data Structures', department: 'Computer Science', semester: 3, hoursPerWeek: 4, type: 'Theory' },
    { id: 2, name: 'Database Lab', department: 'Computer Science', semester: 4, hoursPerWeek: 3, type: 'Practical' },
    { id: 3, name: 'Calculus I', department: 'Mathematics', semester: 1, hoursPerWeek: 5, type: 'Theory' }
  ]);

  const [batches, setBatches] = useState([
    { id: 1, name: 'CS-3A', department: 'Computer Science', semester: 3, strength: 55, shift: 'Morning' },
    { id: 2, name: 'CS-3B', department: 'Computer Science', semester: 3, strength: 58, shift: 'Morning' },
    { id: 3, name: 'MATH-1A', department: 'Mathematics', semester: 1, strength: 72, shift: 'Morning' }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
    type: '',
    department: '',
    subjects: '',
    maxHours: '',
    semester: '',
    hoursPerWeek: '',
    strength: '',
    shift: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleAddNew = (type) => {
    setModalType(type);
    setShowModal(true);
    setFormData({
      name: '',
      capacity: '',
      type: '',
      department: '',
      subjects: '',
      maxHours: '',
      semester: '',
      hoursPerWeek: '',
      strength: '',
      shift: ''
    });
  };

  const handleSubmit = () => {
    const newItem = {
      id: Date.now(),
      ...formData
    };

    switch (modalType) {
      case 'classroom':
        setClassrooms([...classrooms, { ...newItem, capacity: parseInt(formData.capacity) }]);
        break;
      case 'faculty':
        setFaculty([...faculty, { ...newItem, subjects: formData.subjects.split(',').map(s => s.trim()), maxHours: parseInt(formData.maxHours) }]);
        break;
      case 'subject':
        setSubjects([...subjects, { ...newItem, semester: parseInt(formData.semester), hoursPerWeek: parseInt(formData.hoursPerWeek) }]);
        break;
      case 'batch':
        setBatches([...batches, { ...newItem, semester: parseInt(formData.semester), strength: parseInt(formData.strength) }]);
        break;
    }
    setShowModal(false);
  };

  const renderClassroomsTab = () => (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5>Classroom Management</h5>
        <Button variant="primary" onClick={() => handleAddNew('classroom')}>
          Add New Classroom
        </Button>
      </Card.Header>
      <Card.Body>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Room Name</th>
              <th>Capacity</th>
              <th>Type</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classrooms.map((room) => (
              <tr key={room.id}>
                <td>{room.name}</td>
                <td>{room.capacity}</td>
                <td>{room.type}</td>
                <td>{room.department}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  const renderFacultyTab = () => (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5>Faculty Management</h5>
        <Button variant="primary" onClick={() => handleAddNew('faculty')}>
          Add New Faculty
        </Button>
      </Card.Header>
      <Card.Body>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Faculty Name</th>
              <th>Department</th>
              <th>Subjects</th>
              <th>Max Hours/Week</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faculty.map((member) => (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.department}</td>
                <td>{member.subjects.join(', ')}</td>
                <td>{member.maxHours}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  const renderSubjectsTab = () => (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5>Subject Management</h5>
        <Button variant="primary" onClick={() => handleAddNew('subject')}>
          Add New Subject
        </Button>
      </Card.Header>
      <Card.Body>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Subject Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Hours/Week</th>
              <th>Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject) => (
              <tr key={subject.id}>
                <td>{subject.name}</td>
                <td>{subject.department}</td>
                <td>{subject.semester}</td>
                <td>{subject.hoursPerWeek}</td>
                <td>{subject.type}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  const renderBatchesTab = () => (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <h5>Student Batch Management</h5>
        <Button variant="primary" onClick={() => handleAddNew('batch')}>
          Add New Batch
        </Button>
      </Card.Header>
      <Card.Body>
        <Table responsive striped>
          <thead>
            <tr>
              <th>Batch Name</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Strength</th>
              <th>Shift</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr key={batch.id}>
                <td>{batch.name}</td>
                <td>{batch.department}</td>
                <td>{batch.semester}</td>
                <td>{batch.strength}</td>
                <td>{batch.shift}</td>
                <td>
                  <Button variant="outline-primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="outline-danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="text-center mb-5 fade-in-up">
            <h1 className="display-5 text-white mb-3" style={{fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              📋 Data Input & Management
            </h1>
            <p className="lead text-white-75">Manage all the parameters required for timetable generation</p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="mb-3"
          >
            <Tab eventKey="classrooms" title="Classrooms">
              {renderClassroomsTab()}
            </Tab>
            <Tab eventKey="faculty" title="Faculty">
              {renderFacultyTab()}
            </Tab>
            <Tab eventKey="subjects" title="Subjects">
              {renderSubjectsTab()}
            </Tab>
            <Tab eventKey="batches" title="Student Batches">
              {renderBatchesTab()}
            </Tab>
          </Tabs>
        </Col>
      </Row>

      {/* Add New Item Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add New {modalType}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={`Enter ${modalType} name`}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            {modalType === 'classroom' && (
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control
                      type="number"
                      name="capacity"
                      value={formData.capacity}
                      onChange={handleInputChange}
                      placeholder="Room capacity"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="type" value={formData.type} onChange={handleInputChange}>
                      <option value="">Select Type</option>
                      <option value="Classroom">Classroom</option>
                      <option value="Laboratory">Laboratory</option>
                      <option value="Auditorium">Auditorium</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            )}

            {modalType === 'faculty' && (
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subjects (comma-separated)</Form.Label>
                    <Form.Control
                      type="text"
                      name="subjects"
                      value={formData.subjects}
                      onChange={handleInputChange}
                      placeholder="Subject1, Subject2, Subject3"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Max Hours per Week</Form.Label>
                    <Form.Control
                      type="number"
                      name="maxHours"
                      value={formData.maxHours}
                      onChange={handleInputChange}
                      placeholder="Maximum teaching hours"
                    />
                  </Form.Group>
                </Col>
              </Row>
            )}

            {modalType === 'subject' && (
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Semester</Form.Label>
                    <Form.Control
                      type="number"
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      placeholder="Semester number"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Hours per Week</Form.Label>
                    <Form.Control
                      type="number"
                      name="hoursPerWeek"
                      value={formData.hoursPerWeek}
                      onChange={handleInputChange}
                      placeholder="Weekly hours"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Type</Form.Label>
                    <Form.Select name="type" value={formData.type} onChange={handleInputChange}>
                      <option value="">Select Type</option>
                      <option value="Theory">Theory</option>
                      <option value="Practical">Practical</option>
                      <option value="Tutorial">Tutorial</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            )}

            {modalType === 'batch' && (
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Semester</Form.Label>
                    <Form.Control
                      type="number"
                      name="semester"
                      value={formData.semester}
                      onChange={handleInputChange}
                      placeholder="Semester number"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Strength</Form.Label>
                    <Form.Control
                      type="number"
                      name="strength"
                      value={formData.strength}
                      onChange={handleInputChange}
                      placeholder="Number of students"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Shift</Form.Label>
                    <Form.Select name="shift" value={formData.shift} onChange={handleInputChange}>
                      <option value="">Select Shift</option>
                      <option value="Morning">Morning</option>
                      <option value="Evening">Evening</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default DataInput;
