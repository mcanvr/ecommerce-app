import { StyledComponent } from '@/hooks/useStyledComponent';
import { cn } from '@/utils/classnames';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import * as Icons from '../Icons';
import { Text } from '../Text';
import { InputProps } from './Input.types';

export default function Input({ label, hasError, errorMessage, isValid, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View className="gap-2">
      {label ? (
        <Text variant="b1" weight="medium" className="text-primary-900">
          {label}
        </Text>
      ) : (
        <></>
      )}
      <View
        className={cn('flex-row items-center h-input rounded-10 border px-5 py-3.5 gap-2', {
          'border-primary-100': !isFocused,
          'border-primary-900': isFocused,
          'border-success': isValid,
          'border-error': hasError,
        })}>
        <TextInput
          ref={ref =>
            (ref && ref.setNativeProps({ style: { fontFamily: 'GeneralSans-Medium' } })) ||
            undefined
          }
          className="h-input flex-1 placeholder:text-primary-400 text-primary-900"
          style={{ fontFamily: 'GeneralSans-Medium' }}
          {...props}
          onFocus={e => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={e => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          secureTextEntry={props.secureTextEntry ? !isPasswordVisible : props.secureTextEntry}
        />
        <View className="flex-row items-center gap-3">
          {hasError ? (
            <View className="h-6 w-6 flex-row items-center justify-center">
              <StyledComponent component={Icons.WarningCircleIcon} className="text-error" />
            </View>
          ) : (
            <></>
          )}
          {isValid ? (
            <View className="h-6 w-6 flex-row items-center justify-center">
              <StyledComponent component={Icons.CheckCircleIcon} className="text-success" />
            </View>
          ) : (
            <></>
          )}
          {props.secureTextEntry ? (
            <Pressable
              className="h-6 w-6 flex-row items-center justify-center"
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <StyledComponent
                component={isPasswordVisible ? Icons.EyeIcon : Icons.EyeOffIcon}
                className={cn('', {
                  'text-primary-400': !isPasswordVisible,
                  'text-primary-900': isPasswordVisible,
                })}
              />
            </Pressable>
          ) : (
            <></>
          )}
        </View>
      </View>
      {hasError && errorMessage ? (
        <Text variant="b2" weight="medium" className="text-error">
          {errorMessage}
        </Text>
      ) : (
        <></>
      )}
    </View>
  );
}
