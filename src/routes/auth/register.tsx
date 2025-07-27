import { Button, Icons, Input, Text } from '@/components';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Linking, Pressable, ScrollView, View } from 'react-native';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 bg-primary-0">
      <ScrollView contentContainerClassName="px-6 flex-grow-1 pt-safe-offset-6 pb-safe-offset-4">
        <View className="gap-2 mb-6">
          <Text variant="h2" weight="semibold">
            Create an account
          </Text>
          <Text variant="b1" weight="regular" className="text-primary-500">
            Let’s create your account.
          </Text>
        </View>
        <View className="gap-4 w-full mb-3">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
            hasError={fullName.length > 0 && fullName.length < 3}
            errorMessage="Full name must be at least 3 characters"
            isValid={fullName.length >= 3}
            autoComplete="name"
          />
          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            hasError={email.length > 0 && !email.includes('@')}
            errorMessage="Please enter valid email address"
            isValid={email.length > 0 && email.includes('@')}
            autoComplete="email"
          />
          <Input
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            hasError={password.length > 0 && password.length < 8}
            errorMessage="Password must be at least 8 characters"
            isValid={password.length >= 8}
            autoComplete="password"
            secureTextEntry={true}
          />
        </View>
        <Text variant="b2" weight="regular" className="mb-6">
          By signing up you agree to our{' '}
          <Text
            onPress={() => Linking.openURL('https://www.google.com')}
            variant="b2"
            weight="medium"
            className="underline">
            Terms
          </Text>
          ,{' '}
          <Text
            onPress={() => Linking.openURL('https://www.google.com')}
            variant="b2"
            weight="medium"
            className="underline">
            Privacy Policy
          </Text>
          , and{' '}
          <Text
            onPress={() => Linking.openURL('https://www.google.com')}
            variant="b2"
            weight="medium"
            className="underline">
            Cookie Use
          </Text>
        </Text>
        <Button
          buttonClassName="mb-6"
          state={
            fullName.length >= 3 && email.length > 0 && email.includes('@') && password.length >= 8
              ? 'primary'
              : 'disabled'
          }
          text="Create an Account"
        />
        <View className="flex-row items-center gap-3 mb-6">
          <View className="flex-1 h-[1px] bg-primary-100"></View>
          <Text variant="b2" weight="regular" className="text-primary-500">
            Or
          </Text>
          <View className="flex-1 h-[1px] bg-primary-100"></View>
        </View>
        <Button
          buttonClassName="mb-4"
          state="secondary"
          leftIcon={Icons.GoogleLogoIcon}
          text="Sign Up with Google"
          textClassName="text-primary-900 font-general-sans-medium"
        />
        <Button
          buttonClassName="mb-6 !bg-[#1877F2]"
          state="primary"
          leftIcon={Icons.FacebookWhiteLogoIcon}
          leftIconClassName="text-primary-0"
          text="Sign Up with Facebook"
          textClassName="text-primary-0 font-general-sans-medium"
        />
      </ScrollView>
      <View className="w-full flex-row items-center justify-center pb-safe-offset-8">
        <Pressable onPress={() => router.navigate('/auth/login')} className="active:opacity-50">
          <Text variant="b1" weight="regular" className="text-primary-500">
            Already have an account?{' '}
            <Text variant="b1" weight="medium" className="text-primary-900 underline">
              Log In
            </Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
