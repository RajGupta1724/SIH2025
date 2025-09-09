import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert, ProgressBar, ListGroup, Badge } from 'react-bootstrap';
import { generateOptimizedTimetable } from '../utils/timetableAlgorithm';

const TimetableGeneration = () => {
  const [parameters, setParameters] = useState({
    department: '',
    semester: '',
    maxClassesPerDay: 6,
    startTime: '09:00',
    endTime: '17:00',
    breakDuration: 60,
    lunchBreak: true,
    priorityFactors: {
      roomUtilization: 30,
      facultyWorkload: 25,
      studentPreference: 20,
      timeDistribution: 25
    }
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedOptions, setGeneratedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [alerts, setAlerts] = useState([]);

  const handleParameterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith('priorityFactors.')) {
      const factor = name.split('.')[1];
      setParameters({
        ...parameters,
        priorityFactors: {
          ...parameters.priorityFactors,
          [factor]: parseInt(value)
        }
      });
    } else {
      setParameters({
        ...parameters,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const validateParameters = () => {
    const totalPriority = Object.values(parameters.priorityFactors).reduce((sum, val) => sum + val, 0);
    if (totalPriority !== 100) {
      setAlerts([{
        type: 'warning',
        message: `Priority factors must sum to 100%. Current total: ${totalPriority}%`
      }]);
      return false;
    }
    setAlerts([]);
    return true;
  };

  const simulateGeneration = async () => {
    setIsGenerating(true);
    setProgress(0);
    setGeneratedOptions([]);

    // Simulate progress
    const progressSteps = [
      { step: 10, message: 'Loading data parameters...' },
      { step: 25, message: 'Analyzing classroom availability...' },
      { step: 40, message: 'Processing faculty constraints...' },
      { step: 55, message: 'Optimizing room utilization...' },
      { step: 70, message: 'Calculating faculty workload distribution...' },
      { step: 85, message: 'Generating timetable variations...' },
      { step: 95, message: 'Finalizing optimized solutions...' },
      { step: 100, message: 'Generation complete!' }
    ];

    for (const { step, message } of progressSteps) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProgress(step);
      if (step < 100) {
        setAlerts([{ type: 'info', message }]);
      }
    }

    // Generate mock timetable options
    const options = generateOptimizedTimetable(parameters);
    setGeneratedOptions(options);
    setIsGenerating(false);
    setAlerts([{
      type: 'success',
      message: `Successfully generated ${options.length} optimized timetable options!`
    }]);
  };

  const handleGenerate = async () => {
    if (validateParameters()) {
      await simulateGeneration();
    }
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedTimetable', JSON.stringify(option));
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="text-center mb-5 fade-in-up">
            <h1 className="display-5 text-white mb-3" style={{fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              🤖 Timetable Generation
            </h1>
            <p className="lead text-white-75">Configure parameters and generate optimized timetables</p>
          </div>
        </Col>
      </Row>

      {alerts.map((alert, index) => (
        <Alert key={index} variant={alert.type} className="mb-3">
          {alert.message}
        </Alert>
      ))}

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Generation Parameters</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Select
                    name="department"
                    value={parameters.department}
                    onChange={handleParameterChange}
                  >
                    <option value="">Select Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Semester</Form.Label>
                  <Form.Select
                    name="semester"
                    value={parameters.semester}
                    onChange={handleParameterChange}
                  >
                    <option value="">Select Semester</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(sem => (
                      <option key={sem} value={sem}>{sem}</option>
                    ))}
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Max Classes per Day</Form.Label>
                  <Form.Control
                    type="number"
                    name="maxClassesPerDay"
                    value={parameters.maxClassesPerDay}
                    onChange={handleParameterChange}
                    min="4"
                    max="8"
                  />
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="startTime"
                        value={parameters.startTime}
                        onChange={handleParameterChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>End Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="endTime"
                        value={parameters.endTime}
                        onChange={handleParameterChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    name="lunchBreak"
                    label="Include Lunch Break"
                    checked={parameters.lunchBreak}
                    onChange={handleParameterChange}
                  />
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>

          <Card>
            <Card.Header>
              <h5>Optimization Priorities</h5>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Room Utilization ({parameters.priorityFactors.roomUtilization}%)</Form.Label>
                  <Form.Range
                    name="priorityFactors.roomUtilization"
                    value={parameters.priorityFactors.roomUtilization}
                    onChange={handleParameterChange}
                    min="0"
                    max="50"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Faculty Workload ({parameters.priorityFactors.facultyWorkload}%)</Form.Label>
                  <Form.Range
                    name="priorityFactors.facultyWorkload"
                    value={parameters.priorityFactors.facultyWorkload}
                    onChange={handleParameterChange}
                    min="0"
                    max="50"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Student Preference ({parameters.priorityFactors.studentPreference}%)</Form.Label>
                  <Form.Range
                    name="priorityFactors.studentPreference"
                    value={parameters.priorityFactors.studentPreference}
                    onChange={handleParameterChange}
                    min="0"
                    max="50"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Time Distribution ({parameters.priorityFactors.timeDistribution}%)</Form.Label>
                  <Form.Range
                    name="priorityFactors.timeDistribution"
                    value={parameters.priorityFactors.timeDistribution}
                    onChange={handleParameterChange}
                    min="0"
                    max="50"
                  />
                </Form.Group>

                <div className="text-center">
                  <small className="text-muted">
                    Total: {Object.values(parameters.priorityFactors).reduce((sum, val) => sum + val, 0)}%
                  </small>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
          <Card>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <h5>Generation Control</h5>
              <Button
                variant="primary"
                onClick={handleGenerate}
                disabled={isGenerating || !parameters.department || !parameters.semester}
              >
                {isGenerating ? 'Generating...' : 'Generate Timetables'}
              </Button>
            </Card.Header>
            <Card.Body>
              {isGenerating && (
                <div className="mb-4">
                  <ProgressBar animated now={progress} label={`${progress}%`} />
                </div>
              )}

              {generatedOptions.length > 0 && (
                <div>
                  <h6>Generated Timetable Options</h6>
                  <ListGroup>
                    {generatedOptions.map((option) => (
                      <ListGroup.Item
                        key={option.id}
                        className="d-flex justify-content-between align-items-start"
                        active={selectedOption?.id === option.id}
                      >
                        <div>
                          <div className="fw-bold">{option.name}</div>
                          <small className="text-muted">{option.description}</small>
                          <div className="mt-2">
                            <Badge bg="success" className="me-2">
                              Score: {option.optimizationScore}%
                            </Badge>
                            <Badge bg="info" className="me-2">
                              Room Utilization: {option.metrics.roomUtilization}%
                            </Badge>
                            <Badge bg="warning" className="me-2">
                              Faculty Load: {option.metrics.facultyWorkload}%
                            </Badge>
                          </div>
                          {option.conflicts.length > 0 && (
                            <div className="mt-2">
                              <small className="text-danger">
                                Conflicts: {option.conflicts.join(', ')}
                              </small>
                            </div>
                          )}
                        </div>
                        <div>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => selectOption(option)}
                            className="me-2"
                          >
                            Select
                          </Button>
                          <Button variant="outline-secondary" size="sm">
                            Preview
                          </Button>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>

                  {selectedOption && (
                    <Alert variant="success" className="mt-3">
                      <strong>Selected:</strong> {selectedOption.name}
                      <br />
                      <small>You can now view this timetable in the "View Timetable" section.</small>
                    </Alert>
                  )}
                </div>
              )}

              {!isGenerating && generatedOptions.length === 0 && (
                <div className="text-center text-muted py-5">
                  <h5>No timetables generated yet</h5>
                  <p>Configure parameters and click "Generate Timetables" to start</p>
                </div>
              )}
            </Card.Body>
          </Card>

          {generatedOptions.length > 0 && (
            <Card className="mt-4">
              <Card.Header>
                <h5>Optimization Summary</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h6>Best Metrics Achieved</h6>
                    <ul className="list-unstyled">
                      <li>🏫 <strong>Room Utilization:</strong> {Math.max(...generatedOptions.map(o => o.metrics.roomUtilization))}%</li>
                      <li>👥 <strong>Faculty Workload Balance:</strong> {Math.max(...generatedOptions.map(o => o.metrics.facultyWorkload))}%</li>
                      <li>📚 <strong>Student Satisfaction:</strong> {Math.max(...generatedOptions.map(o => o.metrics.studentSatisfaction))}%</li>
                      <li>⏰ <strong>Time Distribution:</strong> {Math.max(...generatedOptions.map(o => o.metrics.timeDistribution))}%</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h6>Constraints Resolved</h6>
                    <ul className="list-unstyled">
                      <li>✅ Room capacity constraints</li>
                      <li>✅ Faculty availability windows</li>
                      <li>✅ Subject hour requirements</li>
                      <li>✅ Break time allocations</li>
                      <li>✅ Department preferences</li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TimetableGeneration;
