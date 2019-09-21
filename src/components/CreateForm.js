import React, { useState } from 'react';
import './CreateForm.css';
import PropTypes from 'prop-types';


export default function CreateForm({ status, addJobApp }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');

  const handleCompany = (e) => {
    setCompany(e.target.value);
  };

  const handlePosition = (e) => {
    setPosition(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJobApp({
      company,
      position,
      description,
      status,
      date: '09/21/19',
    });
  };

  return (
    <div className="CreateForm">
      <form onSubmit={handleSubmit}>
        <div className="InputContainer">
          Company
          <input
            type="text"
            name="Company"
            value={company}
            onChange={handleCompany}
          />
        </div>
        <div className="InputContainer">
          Position
          <input
            type="text"
            name="Position"
            value={position}
            onChange={handlePosition}
          />
        </div>
        <div className="DescriptionContainer">
          Description
          <textarea
            rows="6"
            cols="50"
            type="text"
            name="Description"
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="SubmitButton">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

CreateForm.propTypes = {
  status: PropTypes.string.isRequired,
  addJobApp: PropTypes.func.isRequired,
};
