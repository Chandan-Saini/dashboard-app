import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import Dashboard from '../Pages/Dashboard';
import * as services from './services';

jest.mock('../services', () => ({
  signUp: jest.fn(),
  getUser: jest.fn(),
}));

const mockStore = configureMockStore();
const store = mockStore({
  auth: {
    token: 'some-token',
    user: { email: 'test@example.com', id: '123' },
  },
});

describe('Sign Up flow', () => {
  it('should sign up successfully and redirect to the dashboard page', async () => {
    const history = createMemoryHistory();
    (services.signUp as jest.Mock).mockResolvedValueOnce({
      id: '123',
      token: 'some-token',
    });
    (services.getUser as jest.Mock).mockResolvedValueOnce({
      data: {
        email: 'test@example.com',
        id: '123',
      },
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <SignUp />
          <Dashboard />
        </Router>
      </Provider>
    );

    userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
    userEvent.type(screen.getByLabelText(/password/i), 'password123');
    userEvent.click(screen.getByRole('button', { name: /sign up/i }));

    await waitFor(() => {
      expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    });
  });
});
