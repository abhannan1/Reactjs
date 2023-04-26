import React from "react";
export function Form({
  name,
  email,
  nickName,
  setName,
  setEmail,
  setNickName,
  setPassword,
  handleSubmit,
  isError
}) {
  return <form action="" className="form">
            <h2>Add User</h2>
            <div className="form-row">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id='name' className="form-input" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="nickName" className="form-label">Nick Name</label>
                <input type="text" id='nickName' className="form-input" value={nickName} onChange={(e) => setNickName(e.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id='email'  className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-row">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id='password' className="form-input" onChange={(e) => setPassword(e.target.value)} />
            </div>
            {isError ? <p className="error">Please fill Out All fields!</p> : ""}
            <button className="btn btn-block" onClick={handleSubmit}>Submit</button>
            </form>
       ;
}
  