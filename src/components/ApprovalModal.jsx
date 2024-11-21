import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

const ApprovalModal = ({ open, onClose, onApprove }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Approval Confirmation</DialogTitle>
      <DialogContent>
        <Typography>
          Are you sure you want to approve this project plan?
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onApprove} color="primary" variant="contained">
          Approve
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApprovalModal;
