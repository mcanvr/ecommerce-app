import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { configureReanimatedLogger, ReanimatedLogLevel } from 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

SplashScreen.preventAutoHideAsync();
configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'GeneralSans-Bold': require('@assets/fonts/GeneralSans-Bold.otf'),
    'GeneralSans-BoldItalic': require('@assets/fonts/GeneralSans-BoldItalic.otf'),
    'GeneralSans-Extralight': require('@assets/fonts/GeneralSans-Extralight.otf'),
    'GeneralSans-ExtralightItalic': require('@assets/fonts/GeneralSans-ExtralightItalic.otf'),
    'GeneralSans-Italic': require('@assets/fonts/GeneralSans-Italic.otf'),
    'GeneralSans-Light': require('@assets/fonts/GeneralSans-Light.otf'),
    'GeneralSans-LightItalic': require('@assets/fonts/GeneralSans-LightItalic.otf'),
    'GeneralSans-Medium': require('@assets/fonts/GeneralSans-Medium.otf'),
    'GeneralSans-MediumItalic': require('@assets/fonts/GeneralSans-MediumItalic.otf'),
    'GeneralSans-Regular': require('@assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-Semibold': require('@assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-SemiboldItalic': require('@assets/fonts/GeneralSans-SemiboldItalic.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
