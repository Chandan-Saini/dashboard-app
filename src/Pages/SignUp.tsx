
import React from "react";
import Form from "../Components/Form";
import { signUp, getUser } from '../Services/services';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../Pages/auth.slice';

const SignUp: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSignUp = async (email: string, password: string) => {
    try {
        const { id, token } = await signUp({ email, password });
        !token && alert('Unable to Sign Up. Please try again!')
        
        dispatch(setToken(token));
        const { data } = await getUser(id);
        dispatch(setUser(data));
        navigate('/dashboard');
      } catch (error) {
        alert(`Sign Up Error: ${error}`);
      }
  };

  return (
    <Form
      heading="Create an account"
      onSubmit={handleSignUp}
      submitButtonText="Sign up"
    />
  );
};

export default SignUp;
