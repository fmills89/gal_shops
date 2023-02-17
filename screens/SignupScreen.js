import {useState, useContext} from 'react';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import AuthContent from '../components/Auth/AuthContent';
import {createUser} from '../utils/auth';
import {Alert} from 'react-native';

import {AuthContext} from '../store/auth-context';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  // function will now receive object from onAuthenticate : email/password
  // will use object destruction to pull email, password out of object
  async function signupHandler({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert('Authentication failed!');
    }
    setIsAuthenticating(false);
  }

  // if isAuthenticating is true show loadingOverlay
  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
