import { StyledComponent } from '@/hooks/useStyledComponent';
import { cn } from '@/utils/classnames';
import { Pressable } from 'react-native';
import { Text } from '../Text';
import { ButtonProps } from './Button.types';

export default function Button({
  text,
  state,
  leftIcon,
  rightIcon,
  leftIconClassName,
  rightIconClassName,
  textClassName,
  buttonClassName,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      disabled={state === 'disabled'}
      onPress={state === 'disabled' ? undefined : props.onPress}
      className={cn(
        'flex-row w-full items-center justify-center rounded-10 h-button transition-all duration-100 gap-2.5 active:scale-95',
        {
          'bg-primary-900 active:bg-primary-700': state === 'primary',
          'bg-primary-0 active:bg-primary-100 border border-primary-200': state === 'secondary',
          'bg-primary-200': state === 'disabled',
        },
        buttonClassName
      )}
      {...props}>
      {leftIcon && (
        <StyledComponent
          component={leftIcon}
          className={cn(
            'h-6 w-6',
            {
              'text-primary-0': state === 'primary' || state === 'disabled',
              'text-primary-900': state === 'secondary',
            },
            leftIconClassName
          )}
        />
      )}
      <Text
        variant="b1"
        weight="medium"
        className={cn(
          'font-general-sans-medium',
          {
            'text-primary-0': state === 'primary' || state === 'disabled',
            'text-primary-900': state === 'secondary',
          },
          textClassName
        )}>
        {text}
      </Text>
      {rightIcon && (
        <StyledComponent
          component={rightIcon}
          className={cn(
            'h-6 w-6',
            {
              'text-primary-0': state === 'primary' || state === 'disabled',
              'text-primary-900': state === 'secondary',
            },
            rightIconClassName
          )}
        />
      )}
    </Pressable>
  );
}
