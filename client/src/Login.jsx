import axios from 'axios'
import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', { email, password })
          .then(result => {
            console.log(result)
            if (result.data === "success") {
              navigate('/home')
            }
              
          })
          
      .catch(err=> console.log(err))
  }
  return (

      <div className=' container-fluid d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-25 bg-white rounded p-3'>
        <h2>Login</h2>
          <form onSubmit={handleSubmit}>
             
              <div className='mb-2'>
                  <label htmlFor=''>Email</label>
                      <input type='text' placeholder='Enter Email'
                          className='form-control' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='mb-2'>
                  <label htmlFor=''>Password</label>
                  <input type='password' placeholder='Enter Password' className='form-control' onChange={(e) => setPassword(e.target.value)} />

              </div>
                  <button className='btn btn-success'>Login</button>
                  </form>
                  <p>Already Have an Account</p>
                  <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        
      </div>
  </div>
)
}
