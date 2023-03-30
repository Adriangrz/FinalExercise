import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MainStack} from './src/navigation';
import {NavigationTheme, ThemeProvider} from './src/providers/ThemeProvider';
import {AuthContextProvider} from './src/contexts/AuthContext';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthContextProvider>
          <NavigationContainer theme={NavigationTheme}>
            <MainStack />
          </NavigationContainer>
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
