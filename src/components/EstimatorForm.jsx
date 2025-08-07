import React, { useState } from 'react';
import ResourceInputRow from './ResourceInputRow';
import '../css/Form.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EstimatorForm() {
  const [resources, setResources] = useState([
    { resourceType: '', subType: '', quantity: '', region: '' }
  ]);

  const navigate = useNavigate();

  const handleChange = (index, event) => {
    const updated = [...resources];
    updated[index][event.target.name] = event.target.value;
    setResources(updated);
  };

  const handleAdd = () => {
    setResources([...resources, { resourceType: '', subType: '', quantity: '', region: '' }]);
  };

  const handleRemove = (index) => {
    const updated = [...resources];
    updated.splice(index, 1);
    setResources(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/estimate', resources);
      console.log(resources);
      navigate('/result', { state: response.data });
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Estimate Your Cloud Resources</h2>
      {resources.map((resource, index) => (
        <div className="resource-row" key={index}>
          <ResourceInputRow
            index={index}
            data={resource}
            onChange={handleChange}
            onRemove={handleRemove}
          />
        </div>
      ))}
      <div className="actions">
        <button type="button" onClick={handleAdd}>Add Resource</button>
        <button type="submit" onClick={handleSubmit}>Estimate Cost</button>
      </div>
    </div>
  );
}

export default EstimatorForm;
