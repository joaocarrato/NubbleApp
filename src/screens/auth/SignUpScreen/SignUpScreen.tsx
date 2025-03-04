import React from 'react';

import {useAuthIsUserNameAvailable, useAuthSignUp} from '@domain';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Button,
  Screen,
  Text,
  FormTextInput,
  FormPasswordTextInput,
  ActivityIndicator,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';
import {AuthScreenProps, AuthStackParamList} from '@routes';

import {signUpSchema, SignUpSchema} from './signUpSchema';

const resetParams: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {reset} = useResetNavigationSuccess();
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset(resetParams);
    },
  });
  const {control, handleSubmit, formState, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const userNameQuery = useAuthIsUserNameAvailable({
    username,
    enabled: usernameIsValid,
  });

  function onSubmit(formValues: SignUpSchema) {
    signUp(formValues);
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's16'}}
        rightComponent={
          userNameQuery.isFetching ? (
            <ActivityIndicator size="small" />
          ) : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        autoCapitalize="words"
        label="Nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's16'}}
      />

      <FormTextInput
        control={control}
        name="lastName"
        autoCapitalize="words"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's16'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        autoCapitalize="none"
        boxProps={{mb: 's16'}}
      />

      <FormPasswordTextInput
        control={control}
        name="password"
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button
        loading={isLoading}
        title="Criar minha conta"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid || userNameQuery.isFetching}
      />
    </Screen>
  );
}
