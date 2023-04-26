import React from "react";
export function Form2({
  handleChange,
  handleSubmit,
  isError,
  user
})

{

    console.log(user)

  return <form action="" className="form">
            <h2>Add User</h2>
            <div className="form-row">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id='name' className="form-input" value={user.name} name="name" onChange={handleChange} />
            </div>
            <div className="form-row">
                <label htmlFor="nickName" className="form-label">Nick Name</label>
                <input type="text" id='nickName' className="form-input" value={user.nickName} name="nickName" onChange={handleChange} />
            </div>
            <div className="form-row">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id='email' className="form-input" value={user.email} name="email"  onChange={handleChange} />
            </div>
            <div className="form-row">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id='password' className="form-input" value={user.password} name="password" onChange={handleChange} />
            </div>
            {isError ? <p className="error">Please fill Out All fields!</p> : ""}
            <button className="btn btn-block" onClick={handleSubmit}>Submit</button>
        </form>;
}
  