import React, { useState } from 'react';
import {
  Typography,
  Button,
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from '@mui/material';
import DeliverablePopup from '../components/DeliverablePopup';
import ApprovalModal from '../components/ApprovalModal'; // Ensure this component is created and imported

const ProjectPlanPage = () => {
  const [deliverables, setDeliverables] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [editingDeliverable, setEditingDeliverable] = useState(null);
  const [approvalOpen, setApprovalOpen] = useState(false);

  const handleAddDeliverable = () => {
    setEditingDeliverable(null); // Open the popup for adding a new deliverable
    setPopupOpen(true);
  };

  const handleSaveDeliverable = (deliverable) => {
    if (editingDeliverable) {
      // Update existing deliverable
      setDeliverables((prev) =>
        prev.map((d) => (d.id === editingDeliverable.id ? { ...d, ...deliverable } : d))
      );
    } else {
      // Add new deliverable
      setDeliverables((prev) => [...prev, { ...deliverable, id: Date.now() }]);
    }
    setPopupOpen(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Project Plan
      </Typography>
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddDeliverable}>
            Add Deliverable
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setApprovalOpen(true)}
            disabled={deliverables.length === 0} // Only enable if there are deliverables
          >
            Approve Plan
          </Button>
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deliverables.map((deliverable) => (
            <TableRow key={deliverable.id}>
              <TableCell>{deliverable.title}</TableCell>
              <TableCell>{deliverable.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableBody>
          
            <TableRow >
              <TableCell>Planer</TableCell>
              <TableCell>This is the project Planner</TableCell>
            </TableRow>
          
        </TableBody> */}
      </Table>

      {/* Deliverable Popup */}
      <DeliverablePopup
        open={popupOpen}
        onClose={() => setPopupOpen(false)}
        onSave={handleSaveDeliverable}
        deliverable={editingDeliverable}
      />

      {/* Approval Modal */}
      <ApprovalModal
        open={approvalOpen}
        onClose={() => setApprovalOpen(false)}
        onApprove={() => {
          setApprovalOpen(false);
          alert('Project Plan Approved!');
        }}
      />
    </div>
  );
};

export default ProjectPlanPage;
