import React, { useEffect } from "react";
import {
  Center,
  VStack,
  Text,
  Spinner,
  useColorModeValue,
  Box,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../types/global";

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Splash"
>;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  // Theme-aware colors
  const bgColor = useColorModeValue("white", "dark.background");
  const textColor = useColorModeValue("primary.500", "primary.400");
  const subtitleColor = useColorModeValue(
    "light.textSecondary",
    "dark.textSecondary"
  );

  useEffect(() => {
    // Simulate loading time and navigation
    const timer = setTimeout(() => {
      // Navigate to onboarding or main app based on user state
      // For now, always navigate to onboarding
      navigation.replace("Onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Center flex={1} bg={bgColor}>
      <VStack space={8} alignItems="center">
        {/* Logo placeholder - replace with actual logo */}
        <Box
          w={32}
          h={32}
          borderRadius="full"
          bg="primary.500"
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize="2xl" fontWeight="bold" color="white">
            iF
          </Text>
        </Box>

        {/* App name */}
        <VStack space={2} alignItems="center">
          <Text fontSize="3xl" fontWeight="bold" color={textColor}>
            iFactory
          </Text>
          <Text fontSize="md" color={subtitleColor} textAlign="center">
            Smart Factory Management
          </Text>
        </VStack>

        {/* Loading indicator */}
        <Spinner size="lg" color="primary.500" />
      </VStack>
    </Center>
  );
};

export default SplashScreen;
