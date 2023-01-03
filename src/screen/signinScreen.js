import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';

import {Context as AuthContext} from '../context/authContext';

const SigninScreen = () => {
  const {state, signIn} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={'Sign In'}
        errormessage={state?.errormessage}
        onSubmitText={'Sign In'}
        onSubmit={signIn}></AuthForm>
      <NavLink
        text={'Do not have an account? Sign Up.'}
        routeName={'Signup'}></NavLink>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default SigninScreen;
