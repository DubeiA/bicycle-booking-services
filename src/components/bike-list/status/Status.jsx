import React, { useState } from 'react';

import css from './status.module.css';
import classNames from 'classnames';

const options = [
  { value: 'Available', label: 'Available' },
  { value: 'Busy', label: 'Busy' },
  { value: 'Unavailable', label: 'Unavailable' },
];

export const BikeStatus = ({ initialValue, onUpdateStatus, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(initialValue);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = e => {
    const newStatus = e.target.outerText;

    setSelectedStatus(newStatus);
    onUpdateStatus(newStatus, id);

    setIsOpen(false);
  };

  return (
    <div className={css.selectContainer}>
      <div
        className={classNames({
          [css.select]: isOpen,
          [css.open]: isOpen,
          [css.select]: !isOpen,
        })}
        onClick={toggleDropdown}>
        {selectedStatus}
        <div
          className={css.arrowIcon}
          style={{
            transform: isOpen
              ? 'translateY(-50%) rotate(180deg)'
              : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}></div>
      </div>
      {isOpen && (
        <ul className={css.dropdown}>
          {options.map(option => (
            <li
              key={option.value}
              onClick={e => handleStatusChange(e)}
              className={classNames({
                [css.item]: true,
                [css.selected]: option.value === selectedStatus,
              })}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
