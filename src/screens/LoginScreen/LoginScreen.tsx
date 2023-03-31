import React, {useCallback} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Yup from 'yup';

import {styles} from './styles';
import {useAuth} from '../../contexts';
import {Login} from '../../types/login';

import {Input} from '../../components/Input';
import {Button} from '../../components/Button';

type LoginData = {
  SubmitValues: Login;
  setSubmitting: (isSubmitting: boolean) => void;
};

const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
});

export const LoginScreen = (): JSX.Element => {
  const {setCredentials} = useAuth();

  const login = useCallback(
    ({SubmitValues, setSubmitting}: LoginData) => {
      setCredentials(SubmitValues.username);
      setSubmitting(false);
    },
    [setCredentials],
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView testID="login-screen" style={styles.mainContainer}>
          <View style={styles.container}>
            <Formik
              initialValues={{username: ''}}
              validationSchema={LoginSchema}
              onSubmit={(values, {setSubmitting}) => {
                login({SubmitValues: values, setSubmitting});
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.loginForm}>
                  <Input
                    testID="username-input"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    placeholder="username"
                    autoCapitalize="none"
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                    helperText={
                      errors.username && touched.username
                        ? errors.username
                        : undefined
                    }
                    type="error"
                  />
                  <Button
                    testID="log-in-btn"
                    onPress={handleSubmit}
                    title="Log in"
                  />
                </View>
              )}
            </Formik>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
