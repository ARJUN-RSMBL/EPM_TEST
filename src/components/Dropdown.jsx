import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Dropdown = ({ label, options, value, onChange }) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
