const baseUrl = 'https://reqres.in/api';

const doAsync = async (
  method: string,
  url: string,
  data?: any,
  headers?: Record<string, string>
) => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    };

    const response = await fetch(`${baseUrl}${url}`, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

const signIn = async (creds: { email: string; password: string }) => {
  return await doAsync('POST', '/login', creds);
};

const signUp = async (user: { email: string; password: string }) => {
  return await doAsync('POST', '/register', user);
};

const getUser = async (id: string) => {
  return await doAsync('GET', `/users/${id}`);
};

export { signIn, signUp, getUser };
