import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from '../helper/navigationRef';
import HomeScreen from '../screen/homeScreen';
import LoadingScreen from '../screen/loadingScreen';
import SigninScreen from '../screen/signinScreen';
import SignupScreen from '../screen/signupScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
