import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {RootStackParamList} from './types';
import {LoginScreen} from '../screens/LoginScreen';
import {useAuth} from '../contexts';
import {LoadingIndicator} from '../components/LoadingIndicator';
import {LogOutButton} from '../components/LogOutButton';
import {PostsScreen} from '../screens/PostsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStack = (): JSX.Element => {
  const {username, isLoading} = useAuth();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <Stack.Navigator
      initialRouteName={username ? 'Posts' : 'Login'}
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerRight: () => <LogOutButton />,
      }}>
      {username ? (
        <>
          <Stack.Screen name="Posts" component={PostsScreen} />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};
