import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Badge, Alert, Modal, Form, Table } from 'react-bootstrap';

const ApprovalWorkflow = () => {
  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 1,
      title: "Computer Science Sem-3 Timetable",
      submittedBy: "Dr. John Smith",
      submittedOn: "2024-01-15",
      status: "pending",
      priority: "high",
      department: "Computer Science",
      semester: "3",
      optimizationScore: 85,
      conflicts: ["Minor room overlap on Tuesday 2-3 PM"],
      description: "Optimized timetable focusing on laboratory utilization"
    },
    {
      id: 2,
      title: "Mathematics Sem-1 Timetable",
      submittedBy: "Prof. Jane Doe", 
      submittedOn: "2024-01-14",
      status: "reviewed",
      priority: "medium",
      department: "Mathematics",
      semester: "1",
      optimizationScore: 78,
      conflicts: [],
      description: "Faculty workload balanced timetable for first semester"
    },
    {
      id: 3,
      title: "Physics Lab Schedule Update",
      submittedBy: "Dr. Mike Johnson",
      submittedOn: "2024-01-13",
      status: "approved",
      priority: "low",
      department: "Physics",
      semester: "2",
      optimizationScore: 92,
      conflicts: [],
      description: "Updated physics laboratory scheduling with new equipment"
    }
  ]);

  const [selectedApproval, setSelectedApproval] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewData, setReviewData] = useState({
    decision: '',
    comments: '',
    suggestedChanges: []
  });
  const [showCommentsModal, setShowCommentsModal] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');

  const handleReview = (approval) => {
    setSelectedApproval(approval);
    setShowReviewModal(true);
    setReviewData({
      decision: '',
      comments: '',
      suggestedChanges: []
    });
  };

  const handleApprovalDecision = () => {
    if (!reviewData.decision) return;

    const updatedApprovals = pendingApprovals.map(approval => 
      approval.id === selectedApproval.id 
        ? {
            ...approval, 
            status: reviewData.decision,
            reviewComments: reviewData.comments,
            reviewedOn: new Date().toISOString().split('T')[0],
            reviewedBy: "Current User" // In real app, this would be the logged-in user
          }
        : approval
    );

    setPendingApprovals(updatedApprovals);
    setShowReviewModal(false);
    setSelectedApproval(null);
  };

  const handleViewComments = (approval) => {
    setSelectedApproval(approval);
    setShowCommentsModal(true);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { bg: 'warning', text: 'Pending Review' },
      reviewed: { bg: 'info', text: 'Under Review' },
      approved: { bg: 'success', text: 'Approved' },
      rejected: { bg: 'danger', text: 'Rejected' },
      'needs-changes': { bg: 'secondary', text: 'Needs Changes' }
    };
    
    const config = statusConfig[status] || { bg: 'secondary', text: status };
    return <Badge bg={config.bg}>{config.text}</Badge>;
  };

  const getPriorityBadge = (priority) => {
    const priorityConfig = {
      high: { bg: 'danger', text: 'High' },
      medium: { bg: 'warning', text: 'Medium' },
      low: { bg: 'success', text: 'Low' }
    };
    
    const config = priorityConfig[priority] || { bg: 'secondary', text: priority };
    return <Badge bg={config.bg}>{config.text}</Badge>;
  };

  const filteredApprovals = filterStatus === 'all' 
    ? pendingApprovals 
    : pendingApprovals.filter(approval => approval.status === filterStatus);

  const approvalStats = {
    total: pendingApprovals.length,
    pending: pendingApprovals.filter(a => a.status === 'pending').length,
    approved: pendingApprovals.filter(a => a.status === 'approved').length,
    rejected: pendingApprovals.filter(a => a.status === 'rejected').length
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="text-center mb-5 fade-in-up">
            <h1 className="display-5 text-white mb-3" style={{fontWeight: '800', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
              ✅ Approval Workflow
            </h1>
            <p className="lead text-white-75">Review and approve timetable submissions</p>
          </div>
        </Col>
      </Row>

      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-primary">{approvalStats.total}</h3>
              <small className="text-muted">Total Submissions</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-warning">{approvalStats.pending}</h3>
              <small className="text-muted">Pending Review</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-success">{approvalStats.approved}</h3>
              <small className="text-muted">Approved</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <h3 className="text-danger">{approvalStats.rejected}</h3>
              <small className="text-muted">Rejected</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Filter Controls */}
      <Row className="mb-4">
        <Col md={6}>
          <Form.Group>
            <Form.Label>Filter by Status</Form.Label>
            <Form.Select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Submissions</option>
              <option value="pending">Pending Review</option>
              <option value="reviewed">Under Review</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
              <option value="needs-changes">Needs Changes</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6} className="d-flex align-items-end">
          <Button variant="outline-primary" className="me-2">
            Export Report
          </Button>
          <Button variant="outline-secondary">
            Bulk Actions
          </Button>
        </Col>
      </Row>

      {/* Approval Queue */}
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Approval Queue ({filteredApprovals.length})</h5>
            </Card.Header>
            <Card.Body className="p-0">
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Submission</th>
                    <th>Submitted By</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Score</th>
                    <th>Conflicts</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApprovals.map(approval => (
                    <tr key={approval.id}>
                      <td>
                        <div>
                          <strong>{approval.title}</strong>
                          <br />
                          <small className="text-muted">
                            {approval.department} - Semester {approval.semester}
                          </small>
                          <br />
                          <small className="text-muted">{approval.description}</small>
                        </div>
                      </td>
                      <td>{approval.submittedBy}</td>
                      <td>{approval.submittedOn}</td>
                      <td>{getStatusBadge(approval.status)}</td>
                      <td>{getPriorityBadge(approval.priority)}</td>
                      <td>
                        <Badge bg={approval.optimizationScore >= 85 ? 'success' : 
                                 approval.optimizationScore >= 70 ? 'warning' : 'danger'}>
                          {approval.optimizationScore}%
                        </Badge>
                      </td>
                      <td>
                        {approval.conflicts.length > 0 ? (
                          <Badge bg="warning">{approval.conflicts.length} conflict(s)</Badge>
                        ) : (
                          <Badge bg="success">No conflicts</Badge>
                        )}
                      </td>
                      <td>
                        <div className="btn-group" role="group">
                          {approval.status === 'pending' && (
                            <Button
                              variant="outline-primary"
                              size="sm"
                              onClick={() => handleReview(approval)}
                            >
                              Review
                            </Button>
                          )}
                          <Button
                            variant="outline-info"
                            size="sm"
                            onClick={() => handleViewComments(approval)}
                          >
                            Details
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {filteredApprovals.length === 0 && (
                <div className="text-center p-5 text-muted">
                  <h5>No submissions found</h5>
                  <p>No timetable submissions match the current filter criteria.</p>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Header>
              <h5 className="mb-0">Recent Activity</h5>
            </Card.Header>
            <Card.Body>
              <div className="activity-timeline">
                <div className="activity-item mb-3">
                  <div className="d-flex">
                    <div className="activity-icon bg-success me-3 mt-1">✓</div>
                    <div>
                      <strong>Physics Lab Schedule approved</strong>
                      <br />
                      <small className="text-muted">2 hours ago by Dr. Admin</small>
                    </div>
                  </div>
                </div>
                <div className="activity-item mb-3">
                  <div className="d-flex">
                    <div className="activity-icon bg-info me-3 mt-1">👁</div>
                    <div>
                      <strong>Computer Science Timetable under review</strong>
                      <br />
                      <small className="text-muted">4 hours ago</small>
                    </div>
                  </div>
                </div>
                <div className="activity-item mb-3">
                  <div className="d-flex">
                    <div className="activity-icon bg-warning me-3 mt-1">📝</div>
                    <div>
                      <strong>Mathematics Timetable submitted</strong>
                      <br />
                      <small className="text-muted">Yesterday by Prof. Jane Doe</small>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Review Modal */}
      <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Review Timetable Submission</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedApproval && (
            <div>
              <div className="mb-4">
                <h6>{selectedApproval.title}</h6>
                <p className="text-muted">{selectedApproval.description}</p>
                
                <Row>
                  <Col md={6}>
                    <strong>Department:</strong> {selectedApproval.department}<br />
                    <strong>Semester:</strong> {selectedApproval.semester}<br />
                    <strong>Submitted by:</strong> {selectedApproval.submittedBy}<br />
                  </Col>
                  <Col md={6}>
                    <strong>Optimization Score:</strong> {selectedApproval.optimizationScore}%<br />
                    <strong>Priority:</strong> {selectedApproval.priority}<br />
                    <strong>Conflicts:</strong> {selectedApproval.conflicts.length || 'None'}<br />
                  </Col>
                </Row>

                {selectedApproval.conflicts.length > 0 && (
                  <Alert variant="warning" className="mt-3">
                    <strong>Conflicts Found:</strong>
                    <ul className="mb-0 mt-2">
                      {selectedApproval.conflicts.map((conflict, index) => (
                        <li key={index}>{conflict}</li>
                      ))}
                    </ul>
                  </Alert>
                )}
              </div>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Decision</Form.Label>
                  <Form.Select 
                    value={reviewData.decision} 
                    onChange={(e) => setReviewData({...reviewData, decision: e.target.value})}
                  >
                    <option value="">Select Decision</option>
                    <option value="approved">Approve</option>
                    <option value="needs-changes">Request Changes</option>
                    <option value="rejected">Reject</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Comments</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={reviewData.comments}
                    onChange={(e) => setReviewData({...reviewData, comments: e.target.value})}
                    placeholder="Enter your review comments..."
                  />
                </Form.Group>

                {reviewData.decision === 'needs-changes' && (
                  <Form.Group className="mb-3">
                    <Form.Label>Suggested Changes</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Specify the changes required..."
                    />
                  </Form.Group>
                )}
              </Form>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleApprovalDecision}
            disabled={!reviewData.decision}
          >
            Submit Decision
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Details/Comments Modal */}
      <Modal show={showCommentsModal} onHide={() => setShowCommentsModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Submission Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedApproval && (
            <div>
              <h6>{selectedApproval.title}</h6>
              <p className="text-muted">{selectedApproval.description}</p>
              
              <Row className="mb-4">
                <Col md={6}>
                  <strong>Department:</strong> {selectedApproval.department}<br />
                  <strong>Semester:</strong> {selectedApproval.semester}<br />
                  <strong>Submitted by:</strong> {selectedApproval.submittedBy}<br />
                  <strong>Submitted on:</strong> {selectedApproval.submittedOn}<br />
                </Col>
                <Col md={6}>
                  <strong>Status:</strong> {getStatusBadge(selectedApproval.status)}<br />
                  <strong>Priority:</strong> {getPriorityBadge(selectedApproval.priority)}<br />
                  <strong>Optimization Score:</strong> {selectedApproval.optimizationScore}%<br />
                  {selectedApproval.reviewedOn && (
                    <>
                      <strong>Reviewed on:</strong> {selectedApproval.reviewedOn}<br />
                    </>
                  )}
                </Col>
              </Row>

              {selectedApproval.reviewComments && (
                <Alert variant="info">
                  <strong>Review Comments:</strong>
                  <p className="mb-0 mt-2">{selectedApproval.reviewComments}</p>
                </Alert>
              )}

              {selectedApproval.conflicts.length > 0 && (
                <Alert variant="warning">
                  <strong>Identified Conflicts:</strong>
                  <ul className="mb-0 mt-2">
                    {selectedApproval.conflicts.map((conflict, index) => (
                      <li key={index}>{conflict}</li>
                    ))}
                  </ul>
                </Alert>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCommentsModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ApprovalWorkflow;
