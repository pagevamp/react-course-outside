import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from 'services/requests/login.request';

type Inputs = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const response = await login(data);
    if (response) {
      alert('Successfully Logged In');
      return;
    }
    alert('Login Failed!');
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login__form__title">Login Form</h1>
        <input
          className="login__form__input"
          type="email"
          placeholder="Email"
          {...register('email', { required: true })}
        />

        {errors.email && <p className="login__form__error">Email can&apos;t be empty.</p>}

        <input
          className="login__form__input"
          type="password"
          placeholder="Password"
          {...register('password', { required: true, minLength: 6 })}
        />

        {errors.password && (
          <p className="login__form__error">Password can&apos;t be empty and Password is also too short.</p>
        )}

        <input className="login__form__submit" type="submit" value="Login" />
      </form>
    </div>
  );
}
