import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from 'react-query';

import {MainStack} from './src/navigation';
import {NavigationTheme, ThemeProvider} from './src/providers/ThemeProvider';
import {AuthContextProvider} from './src/contexts/AuthContext';

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthContextProvider>
          <NavigationContainer theme={NavigationTheme}>
            <QueryClientProvider client={queryClient}>
              <MainStack />
            </QueryClientProvider>
          </NavigationContainer>
        </AuthContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
