import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import SplashScreen from 'react-native-splash-screen';

// Import theme and localization
import theme from './src/theme';
import './src/locales';

// Import navigation
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => {
  useEffect(() => {
    // Hide splash screen after app is loaded
    const timer = setTimeout(() => {
      if (SplashScreen) {
        SplashScreen.hide();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AppNavigator />
    </NativeBaseProvider>
  );
};

export default App;
