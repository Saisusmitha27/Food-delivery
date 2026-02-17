import React, { useState } from 'react';

const RegisterForm = ({ onRegisterSuccess }) => {
  const [registerDetails, setRegisterDetails] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerDetails)
    setRegisterDetails({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    onRegisterSuccess()
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({ ...registerDetails, [name]: value })
  }

  return (
    <div className="flex justify-center m-30">
      <form className="bg-white p-10 rounded-lg shadow-lg w-130" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4 font-bold">Register</h1>

        <label>Full Name:</label>
        <input
          className="w-full border p-1 mb-4 rounded"
          value={registerDetails.fullName}
          placeholder="Enter your Full Name"
          type="text"
          name="fullName"
          onChange={handleChange}
          required
        />

        <label>Email Address:</label>
        <input
          className="w-full border p-1 mb-4 rounded"
          value={registerDetails.email}
          placeholder="Enter your Email"
          type="email"
          name="email"
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          className="w-full border p-1 mb-4 rounded"
          value={registerDetails.password}
          placeholder="Enter your Password"
          type="password"
          name="password"
          onChange={handleChange}
          required
        />

        <label>Confirm Password:</label>
        <input
          className="w-full border p-1 mb-4 rounded"
          value={registerDetails.confirmPassword}
          placeholder="Re-enter your password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          required
        />

        <button type="submit" className="bg-blue-500 text-white p-1 mt-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm;
