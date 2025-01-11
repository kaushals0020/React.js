import React, { useState } from 'react';
import './FormValidation.css'; // Importing the CSS file

const FormValidation = () => {
  // State to store form data
  const [formData, setFormData] = useState({username: '', email: '', password: '', confirmPassword: ''});

  // State to store multiple Validation error messages
  const [errors, setErrors] = useState({});

  // Update input change
  const updateFormdata = (event) => {
    setFormData({...formData,[event.target.name]: event.target.value});
  };

  // Validate form
  const validateForm = () => {
    const { username, email, password, confirmPassword } = formData;
    const errors = {};

    // Basic validation for each field
    if (username.trim() === '') {
      errors.username = 'Username is required';
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
    }

    // Check if email contains '@' and '.'
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      errors.email = 'Email must contain "@" and a domain (e.g., ".com")';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    // Confirm Password validation
    if (confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    // Check if no errors exist
    if (Object.keys(validationErrors).length === 0) {
      alert('Form is valid and ready for submission!');
      
    }
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={updateFormdata} />
        { errors.username && <p>{errors.username}</p>}
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={updateFormdata} />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={updateFormdata}/>
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div className="form-group">
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={updateFormdata}/>
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
