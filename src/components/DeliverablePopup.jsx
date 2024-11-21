import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from '@mui/material';

const DeliverablePopup = ({ open, onClose, onSave, deliverable }) => {
  // Use default values when `deliverable` is null or undefined
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (deliverable) {
      setTitle(deliverable.title || '');
      setDescription(deliverable.description || '');
    } else {
      setTitle('');
      setDescription('');
    }
  }, [deliverable]);

  const handleSave = () => {
    onSave({ title, description });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{deliverable ? 'Edit Deliverable' : 'Add Deliverable'}</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeliverablePopup;
