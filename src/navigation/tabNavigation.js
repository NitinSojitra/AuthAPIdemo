import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import HomeScreen from '../screen/homeScreen';
import SettingsScreen from '../screen/settingScreen';

const Tab = createBottomTabNavigator();
const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // tabBarActiveBackgroundColor: 'green',
        // tabBarInactiveBackgroundColor: 'white',
        tabBarStyle: {
          paddingBottom: 5,
          backgroundColor: 'white',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = 'Home';
            color = focused ? 'red' : 'black';
          } else if (route.name === 'setting') {
            iconName = 'Setting';
            color = focused ? 'red' : 'black';
          }
          return (
            <Text style={{height: 20, width: 20, tintColor: color}}>
              iconName
            </Text>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name="home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="setting"
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};

export default TabScreen;
