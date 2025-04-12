import React from 'react';

import {useAuthSignUp} from '@domain';
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
import {useAsyncValidation} from './useAsyncValidation';

const defaultValues: SignUpSchema = {
  username: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const resetParam: AuthStackParamList['SuccessScreen'] = {
  title: 'Sua conta foi criada com sucesso',
  description: 'Agora é só fazer login na nossa plataforma',
  icon: {
    name: 'checkRound',
    color: 'success',
  },
};

export function SignUpScreen({}: AuthScreenProps<'SignUpScreen'>) {
  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => reset(resetParam),
  });
  const {reset} = useResetNavigationSuccess();
  const {control, handleSubmit, formState, watch, getFieldState} =
    useForm<SignUpSchema>({
      resolver: zodResolver(signUpSchema),
      defaultValues,
      mode: 'onChange',
    });

  function onSubmit(data: SignUpSchema) {
    signUp(data);
  }

  const {usernameValidation, emailValidation} = useAsyncValidation({
    watch,
    getFieldState,
  });

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
        errorMessage={usernameValidation.errorMessage}
        rightComponent={
          usernameValidation.isFetching ? (
            <ActivityIndicator size={'small'} />
          ) : undefined
        }
        boxProps={{mb: 's16'}}
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
        errorMessage={emailValidation.errorMessage}
        rightComponent={
          emailValidation.isFetching ? (
            <ActivityIndicator size={'small'} />
          ) : undefined
        }
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
        disabled={
          !formState.isValid ||
          usernameValidation.notReady ||
          emailValidation.notReady
        }
      />
    </Screen>
  );
}
