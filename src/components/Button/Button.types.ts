import { PressableProps } from 'react-native';

export interface ButtonProps extends PressableProps {
  text: string;
  state: 'primary' | 'secondary' | 'disabled';
  leftIcon?: React.ComponentType<any>;
  rightIcon?: React.ComponentType<any>;
  leftIconClassName?: string;
  rightIconClassName?: string;
  textClassName?: string;
  buttonClassName?: string;
}
