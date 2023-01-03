import Geolocation from '@react-native-community/geolocation';
import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  PermissionsAndroid,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {Context as AuthContext} from '../context/authContext';
import {Context as LocationContext} from '../context/locationContext';

import MapViewDirections from 'react-native-maps-directions';

const HomeScreen = () => {
  const {signOut} = useContext(AuthContext);
  const {state, addLocation} = useContext(LocationContext);

  useState(() => {
    Geolocation.getCurrentPosition(
      position => {
        let currentLongitude = parseFloat(position.coords.longitude.toString());
        let currentLatitude = parseFloat(position.coords.latitude.toString());

        addLocation(currentLatitude, currentLongitude);
      },
      error => alert(error.message),
      {
        enableHighAccuracy: false,
        timeout: 20000,
      },
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          elevation: 10,
          backgroundColor: '#ffff',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: '500',
          }}>
          Home
        </Text>
        <TouchableOpacity
          onPress={() => {
            signOut();
          }}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../../assets/logout.png')}
          />
        </TouchableOpacity>
      </View>
      <MapView
        style={{flex: 1, margin: 20}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.7041,
          longitude: 77.1025,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        showsCompass={true}
        scrollEnabled={true}
        zoomEnabled={true}
        pitchEnabled={true}
        rotateEnabled={true}>
        <Marker
          key={'0'}
          coordinate={{
            latitude: 28.7041,
            longitude: 77.1025,
          }}
          title={'NYC'}
          description={'New York City'}>
          <Image
            style={{height: 30, width: 30}}
            source={require('../../assets/map.png')}
          />
        </Marker>
        <MapViewDirections
          strokeColor="blue"
          strokeWidth={4}
          origin={{
            latitude: 28.7041,
            longitude: 77.1025,
          }}
          destination={{
            latitude: 19.076,
            longitude: 72.8777,
          }}
          apikey={'AIzaSyDSg9ddvJZ_PC1Ctgr04SlbCXewqKSkHso'}
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
