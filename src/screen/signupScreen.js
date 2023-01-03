import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/authForm';
import NavLink from '../components/navLink';
import {Context as AuthContext} from '../context/authContext';

const SignupScreen = () => {
  const {state, signUp} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={'Sign Up'}
        errormessage={state?.errormessage}
        onSubmitText={'Sign Up'}
        onSubmit={signUp}></AuthForm>
      <NavLink
        text={'Already have an account? Sign In.'}
        routeName={'Signin'}></NavLink>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});

export default SignupScreen;
