import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSuccessMessage(''); 

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSuccessMessage('Form submitted successfully!');
      setFormData({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  const inputStyle = { width: '100%', padding: '8px', marginBottom: '5px', boxSizing: 'border-box' };
  const errorStyle = { color: 'red', fontSize: '14px', marginBottom: '15px', marginTop: '0', display: 'block' };
  const formContainerStyle = { maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ffeaea', borderRadius: '8px' };

  return (
    <div style={formContainerStyle}>
      <h2>Create Account</h2>
      
      {successMessage && (
        <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '10px', marginBottom: '15px', borderRadius: '4px' }}>
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"><strong>Name</strong></label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            style={inputStyle}
          />
          {errors.name && <span style={errorStyle}>{errors.name}</span>}
        </div>

        {/* bagian email */}
        <div>
          <label htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={inputStyle}
          />
          {errors.email && <span style={errorStyle}>{errors.email}</span>}
        </div>

        {/* bagian password */}
        <div>
          <label htmlFor="password"><strong>Password</strong></label> 
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter a secure password"
            style={inputStyle}
          />
          {errors.password && <span style={errorStyle}>{errors.password}</span>}
        </div>

        <button 
          type="submit" 
          style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}