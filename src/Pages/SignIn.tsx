import React from "react";
import Form from "../Components/Form";
import { signIn, getUser } from '../Services/services';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../Pages/auth.slice';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (email: string, password: string) => {
    try {
      const { token } = await signIn({ email, password });
      !token && alert('Unable to Sign In. Please try again!')

      dispatch(setToken(token));
      const { data } = await getUser(Math.floor(Math.random() * 10).toString());
      dispatch(setUser(data));
      navigate('/dashboard');
    } catch (error) {
      alert(`Sign In Error: ${error}`);
    }
  };

  return (
    <Form
      heading="Sign in to your account"
      onSubmit={handleSignIn}
      submitButtonText="Sign in"
    />
  );
};

export default SignIn;
