import axios from 'axios';

const API_KEY = 'AIzaSyCEAC5gL1tNpJMoh3vPFvvO510NGX7ks5c';

// create user sending to firebase - using async will always return a promise
export async function createUser(email, password) {
  // we can now store the response in a var by using promise
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    },
  );
}
