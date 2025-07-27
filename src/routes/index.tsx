import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SplashScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handleOnboarding = () => {
    router.replace('/onboarding');
  };

  useEffect(() => {
    setTimeout(() => {
      handleOnboarding();
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View className="flex-1 items-center justify-center bg-primary-900 gap-6 relative pt-safe pb-safe">
        <Image
          source={require('@assets/images/splash_bg.png')}
          className="absolute left-0 right-0 bottom-0 h-screen w-screen"
        />
        <Image source={require('@assets/images/logo.png')} className="h-32 w-32" />
        <LottieView
          source={require('@assets/loading.json')}
          autoPlay
          loop
          style={{ width: 50, height: 50, position: 'absolute', bottom: insets.bottom + 100 }}
        />
      </View>
    </>
  );
}
