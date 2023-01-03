import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const AuthForm = ({headerText, errormessage, onSubmitText, onSubmit}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 30,
          color: 'black',
          marginVertical: 25,
        }}>
        {headerText}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: 'black',
          marginBottom: 5,
        }}>
        Email
      </Text>
      <TextInput
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          borderColor: 'black',
        }}></TextInput>
      <Text
        style={{
          fontSize: 14,
          color: 'black',
          marginTop: 15,
          marginBottom: 5,
        }}>
        Password
      </Text>
      <TextInput
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          borderColor: 'black',
        }}></TextInput>
      <TouchableOpacity
        onPress={async () => {
          await onSubmit({email, password});
        }}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 30,
            borderWidth: 1.5,
            borderRadius: 10,
            paddingHorizontal: 30,
            paddingVertical: 5,
            backgroundColor: '#BADFFF',
            color: 'black',
            alignSelf: 'center',
            borderColor: '#3385FF',
          }}>
          {onSubmitText}
        </Text>
      </TouchableOpacity>
      {errormessage ? (
        <Text
          style={{
            fontSize: 14,
            color: 'red',
            marginTop: 15,
            marginBottom: 5,
          }}>
          {errormessage}
        </Text>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default AuthForm;
