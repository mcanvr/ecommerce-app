export type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'b1' | 'b2' | 'b3';

export type TextWeight = 'semibold' | 'medium' | 'regular';

export interface TextProps {
  children: React.ReactNode;
  variant: TextVariant;
  weight: TextWeight;
  className?: string;
  onPress?: () => void;
}
