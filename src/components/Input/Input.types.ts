import { TextInputProps } from 'react-native';

export interface InputProps extends Omit<TextInputProps, 'className' | 'style'> {
  label: string;
  hasError?: boolean;
  errorMessage?: string;
  isValid?: boolean;
}
