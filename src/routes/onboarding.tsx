import { Button, Icons, Text } from '@/components';
import { router } from 'expo-router';
import { Image, StatusBar, View } from 'react-native';

export default function Onboarding() {
  return (
    <View className="flex-1 pt-safe-offset-2 bg-primary-0">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 pt-3 relative">
        <View className="z-10">
          <Text variant="h1" weight="semibold" className="px-6 -mb-5">
            Define
          </Text>
          <Text variant="h1" weight="semibold" className="px-6 -mb-5">
            yourself in
          </Text>
          <Text variant="h1" weight="semibold" className="px-6 -mb-5">
            your unique
          </Text>
          <Text variant="h1" weight="semibold" className="px-6 -mb-5">
            way.
          </Text>
        </View>
        <Image
          source={require('@assets/images/onboarding_bg.png')}
          className="absolute w-full h-full top-20"
        />
        <Image
          source={require('@assets/images/onboarding_image.png')}
          className="absolute w-full h-full top-20"
        />
      </View>
      <View className="bg-primary-0 border-t border-t-primary-100 min-h-24 pb-safe flex-row items-center justify-center px-6">
        <Button
          state="primary"
          text="Get Started"
          onPress={() => router.replace('/auth/register')}
          rightIcon={Icons.ArrowIcon}
          rightIconClassName="rotate-180"
        />
      </View>
    </View>
  );
}
