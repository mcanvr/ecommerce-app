import { cn } from '@/utils/classnames';
import { Text as RNText } from 'react-native';
import { TextProps } from './Text.types';

export default function Text({ children, variant, weight, className }: TextProps) {
  return (
    <RNText
      className={cn(
        {
          'text-h1': variant === 'h1',
          'text-h2': variant === 'h2',
          'text-h3': variant === 'h3',
          'text-h4': variant === 'h4',
          'text-b1': variant === 'b1',
          'text-b2': variant === 'b2',
          'text-b3': variant === 'b3',
          'font-general-sans-semibold': weight === 'semibold',
          'font-general-sans-medium': weight === 'medium',
          'font-general-sans-regular': weight === 'regular',
        },
        className
      )}>
      {children}
    </RNText>
  );
}
