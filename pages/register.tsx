import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { object as yupObject, string as yupString } from 'yup';
import { registerUser } from 'services/requests/registration';

const schema = yupObject().shape({
  firstname: yupString().required(),
  lastname: yupString().required(),
  email: yupString().email().required(),
  password: yupString().min(6).max(16).required(),
});

/// react form hook
/// styled component, css modules
function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    const response = registerUser({
      name: firstname,
      email: email,
      username: lastname,
      password: password,
      confirm_password: confirmPassword,
    });

    console.clear();
    console.log(response);
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
                    Last Name
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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                  />
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
