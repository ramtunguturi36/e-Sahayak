import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Admin_dashboard_components/Addreg.css';

const UnifiedRegister = () => {
  const { userType } = useParams(); // 'judge' or 'admin'
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    phone: '',
    gender: '',
    courtAdminId: '',
    education: userType === 'judge' ? '' : undefined,
    role: userType === 'admin' ? 'Court Administrative Officer' : undefined
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.lastname) newErrors.lastname = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.courtAdminId) newErrors.courtAdminId = 'Court Admin ID is required';
    if (userType === 'judge' && !formData.education) {
      newErrors.education = 'Education is required for judges';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const createSendBirdUser = async (username) => {
    try {
      // Generate a unique user ID using a combination of username and a random string
      const randomString = Math.random().toString(36).substring(2, 15);
      const uniqueUserId = `${username}_${randomString}_${Date.now()}`;
      
      const response = await axios.post(
        'https://api-049FF9C5-DFDC-4991-B147-D2FDFDC72C54.sendbird.com/v3/users',
        {
          user_id: uniqueUserId,
          nickname: username,
          profile_url: 'https://example.com/profile-image.jpg'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Api-Token': '2ef385818c2c2b64c09437dfbf7f5166c539d8f9',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('SendBird user creation error:', error);
      // Don't throw the error, just log it and continue
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      // First, register with the backend
      const endpoint = userType === 'judge' 
        ? 'http://localhost:5000/judge/register'
        : 'http://localhost:5000/admin/register';

      const response = await axios.post(endpoint, formData);
      
      // Then, create SendBird user
      const sendBirdResult = await createSendBirdUser(formData.username);
      if (!sendBirdResult) {
        console.log('SendBird user creation skipped or failed');
      }
      
      toast.success('Registration successful! Please check your email to complete the process.');
      
      // Reset form
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        username: '',
        phone: '',
        gender: '',
        courtAdminId: '',
        education: userType === 'judge' ? '' : undefined,
        role: userType === 'admin' ? 'Court Administrative Officer' : undefined
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="judges-form">
      <ToastContainer />
      <h2 style={{ marginBottom: "0", paddingBottom: "0" }}>
        {userType === 'judge' ? 'JUDGE REGISTRATION FORM' : 'COURT ADMIN REGISTRATION FORM'}
      </h2>
      <br />
      <form className="judges-form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="form-input"
          />
          {errors.firstname && <span style={{ color: 'red', fontSize: '12px' }}>{errors.firstname}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="lastname" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className="form-input"
          />
          {errors.lastname && <span style={{ color: 'red', fontSize: '12px' }}>{errors.lastname}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-input"
          />
          {errors.username && <span style={{ color: 'red', fontSize: '12px' }}>{errors.username}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number:
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
          {errors.phone && <span style={{ color: 'red', fontSize: '12px' }}>{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="gender" className="form-label">
            Gender:
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span style={{ color: 'red', fontSize: '12px' }}>{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="courtAdminId" className="form-label">
            Court Admin ID:
          </label>
          <input
            type="text"
            name="courtAdminId"
            value={formData.courtAdminId}
            onChange={handleChange}
            className="form-input"
          />
          {errors.courtAdminId && <span style={{ color: 'red', fontSize: '12px' }}>{errors.courtAdminId}</span>}
        </div>

        {userType === 'judge' && (
          <div className="form-group">
            <label htmlFor="education" className="form-label">
              Education:
            </label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              className="form-input"
              placeholder="e.g., LL.B., LL.M."
            />
            {errors.education && <span style={{ color: 'red', fontSize: '12px' }}>{errors.education}</span>}
          </div>
        )}

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default UnifiedRegister; 