import React from 'react';
import {Provider as AuthProvider} from './src/context/authContext';
import {Provider as LocationProvider} from './src/context/locationContext';
import Navigation from './src/navigation/navigation';

const App = () => {
  return (
    <LocationProvider>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </LocationProvider>
  );
};

export default App;
