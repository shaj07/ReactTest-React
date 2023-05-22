import * as Router from "react-router-dom"
import { useState } from 'react'
import React from 'react';
import axios from 'axios';



export const Testimonials = (props) => {
  const [data, setData] = useState({})
  const [open, setOpen] = React.useState(false);
  const [err, setErr] = React.useState('')
  const navigate = Router.useNavigate();
  const updateData = e => {
      setData({
          data,
          [e.target.name]: e.target.value
      })
  }

  const submit = e => {
      e.preventDefault()
      console.log(data.password)
      axios.post("https://cors-anywhere.herokuapp.com/https://pqzxwbqbi6.execute-api.eu-central-1.amazonaws.com/Login",
            {
                'Password': data.password,
                
            }).then((res) => {
              
              console.log(res?.data)
              if(res?.data==true)
              {
               navigate("/dashboard")
                console.log('hello')
              }
              else{
                alert("Incorrect Password");
              }
               
            }).catch((err) => {
                if (err) {
                    console.log(err?.message)
                    setErr(err?.message)
                    setOpen(true)
                }
            })
  }
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Login</h2>
        </div>
        <form onSubmit={submit}>
        <div className='row'>
          
           
                <div className='col-md-4'>
                  <div className='testimonial'>
                  <label className="lblpassword">Password</label>
                    <input type='password' name="password" className="form-control txtpwd" onChange={updateData}></input>
            
                  </div>
                </div>
              
            
        </div>
        <div className="row">
        <div className='col-md-4'>
          <div className="testimonial">
        <button  className="btn btn-primary btnlogin">
             Login
          </button>
          </div>
          </div>

        </div>
        </form>
      </div>
    </div>
  )
}
