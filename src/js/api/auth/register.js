import { API_AUTH_REGISTER, API_AUTH_KEY } from '../constants.js';
import { headers } from '../headers';
import { getKey } from './key.js';

export async function register({
  name,
  email,
  password,
  bio,
  banner,
  avatar,
}) {

  try {
    const userData = {
      name,
      email,
      password,
      bio,
      banner,
      avatar,
    };

    console.log("Sending registration data to API", userData);


    const postData = {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(userData),
    };

    const response = await fetch(API_AUTH_REGISTER, postData);
    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const json = await response.json();
    console.log(json);


    localStorage.setItem('accessToken', json.accessToken);
    const apiKey = await getKey(API_AUTH_KEY);
    console.log('Access token stored:', apiKey);

    return json;

  } catch (error) {
    console.error('Error during registration:', error);
    throw error;

  }
}

