import { Button, Icons, Text } from '@/components';
import { useStyledComponent } from '@/hooks/useStyledComponent';
import { Image } from 'expo-image';
import { StatusBar, View } from 'react-native';

export default function Onboarding() {
  const StyledImage = useStyledComponent(Image);
  return (
    <View className="flex-1 pt-safe-offset-2 bg-primary-0">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 pt-3 relative">
        <View className="z-10">
          <Text variant="h1" weight="semibold" className="px-6 -mb-6">
            Define
          </Text>
          <Text variant="h1" weight="semibold" className="px-6 -mb-6">
            yourself in
          </Text>
          <Text variant="h1" weight="semibold" className="px-6 -mb-6">
            your unique
          </Text>
          <Text variant="h1" weight="semibold" className="px-6 -mb-6">
            way.
          </Text>
        </View>
        <StyledImage
          source={require('@assets/images/onboarding_bg.png')}
          className="absolute w-full h-full top-20"
        />
        <StyledImage
          source={require('@assets/images/onboarding_image.png')}
          className="absolute w-full h-full top-20"
        />
      </View>
      <View className="bg-primary-0 border-t border-t-primary-100 min-h-24 pb-safe flex-row items-center justify-center px-6">
        <Button
          state="primary"
          text="Get Started"
          onPress={() => {}}
          rightIcon={Icons.ArrowIcon}
          rightIconClassName="rotate-180"
        />
      </View>
    </View>
  );
}
