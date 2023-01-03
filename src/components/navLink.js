import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const NavLink = ({text, routeName}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text
          style={{
            color: '#3385FF',
            fontSize: 16,
            marginTop: 25,
          }}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default NavLink;
