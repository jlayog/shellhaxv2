import React, { useState } from 'react';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    company: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, company, email, password, password2 } = user;

  const onChange = e => setUser({...user, [e.target.name]: e.target.value});

  return (
    <div className="form-container">
      <h1>
      <span className="text-primary">Account</span> <span className="text-secondary">Signup</span>
      </h1>
      {/* <form onSubmit={onSubmit}> */}
      <form className="card">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="name">Company</label>
          <input type="text" name="company" value={company} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange} minLength='6'/>
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input type="password" name="password2" value={password2} onChange={onChange} minLength='6'/>
        </div>
        <input type="submit" value="Signup" className="btn btn-primary btn-block"/>
      </form>
    </div>
  )
}

export default Signup
