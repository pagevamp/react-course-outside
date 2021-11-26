import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import {object, string, ref} from 'yup';

const schema = object().shape({
  firstname: string().required(),
  lastname: string().required(),
  email: string().email().required(),
  password: string().min(4).max(16).required(),
  confirmPassword: string().oneOf([ref("password"),null])
});

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    console.log('register');
  };

  return (
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-outline mb-4">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    {...register('firstname', { required: true })}
                    className="form-control form-control-lg"
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  {errors.firstname && <span>This field is required</span>}
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="lastname" className="form-label">
                    Last name
                  </label>
                  <input
                    {...register('lastname')}
                    className="form-control form-control-lg"
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="email" className="form-label">
                    Email{' '}
                  </label>
                  <input
                    {...register('email')}
                    className="form-control form-control-lg"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="password" className="form-label">
                    password
                  </label>
                  <input
                    {...register('password')}
                    className="form-control form-control-lg"
                    id="password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="form-outline mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    {...register('confirmPassword')}
                    className="form-control form-control-lg"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                  />
                   {errors.confirmPassword && <span>Password Didn't Match</span>}
                </div>
                <button className="btn btn-danger">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
