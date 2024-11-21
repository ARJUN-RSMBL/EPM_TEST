import React from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from '@mui/material';

const DeliverablePopup = ({ open, onClose, onSave, deliverable = {} }) => {
  const [title, setTitle] = React.useState(deliverable.title || '');
  const [description, setDescription] = React.useState(deliverable.description || '');

  const handleSave = () => {
    onSave({ title, description });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{deliverable.id ? 'Edit Deliverable' : 'Add Deliverable'}</DialogTitle>
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
