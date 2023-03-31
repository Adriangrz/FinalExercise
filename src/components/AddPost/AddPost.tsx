import React from 'react';
import {Formik} from 'formik';
import {View} from 'react-native';
import * as Yup from 'yup';

import {CreatePost} from '../../types/post';

import {Button} from '../Button';
import {Input} from '../Input';

export type AddPostForm = {
  submitValues: CreatePost;
  setSubmitting: (isSubmitting: boolean) => void;
};

type AddPostProps = {
  addPost: ({}: AddPostForm) => void;
};

const PostSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
});

export const AddPost = ({addPost}: AddPostProps) => {
  return (
    <Formik
      initialValues={{title: ''}}
      validationSchema={PostSchema}
      onSubmit={(values, {setSubmitting, resetForm}) => {
        resetForm();
        addPost({submitValues: values, setSubmitting});
      }}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <Input
            placeholder="title"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          <Button onPress={() => handleSubmit()} title="Add" />
        </View>
      )}
    </Formik>
  );
};
