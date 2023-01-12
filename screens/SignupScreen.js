import {useState} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import {createUser} from '../utils/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  // function will now receive object from onAuthenticate : email/password
  // will use object destruction to pull email, password out of object
  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    await createUser(email, password);
    setIsAuthenticating(false);
  }

  // if isAuthenticating is true show loadingOverlay
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
