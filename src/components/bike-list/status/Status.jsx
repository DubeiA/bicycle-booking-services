import React, { useState } from 'react';

import css from './status.module.css';

import Select from 'react-select';

const options = [
  { value: 'Available', label: 'Available' },
  { value: 'Busy', label: 'Busy' },
  { value: 'Unavailable', label: 'Unavailable' },
];

export const BikeStatus = ({ initialValue, onUpdateStatus, id }) => {
  const [selectedStatus, setSelectedStatus] = useState(initialValue);

  const handleStatusChange = selectedOption => {
    const newStatus = selectedOption.value;
    setSelectedStatus(newStatus);
    onUpdateStatus(newStatus, id);
  };

  return (
    <div className={css.status}>
      <Select
        value={{ value: selectedStatus, label: selectedStatus }}
        onChange={handleStatusChange}
        options={options}
        styles={{
          control: provided => ({
            ...provided,
            backgroundColor: '#e8e8e8',
            color: '#333',
            borderRadius: '5px',
            fontFamily: 'Saira',
            border: 'none',
            outline: 'none',
            minWidth: 110,
            textTransform: 'capitalize',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#6fcf97' : 'white',
            color: state.isSelected ? 'white' : '#333',
            cursor: 'pointer',
            fontFamily: 'Saira',
          }),
        }}
      />
    </div>
  );
};
