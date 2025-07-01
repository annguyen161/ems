import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Center,
  useColorModeValue,
  Pressable,
} from "native-base";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { RootStackParamList } from "../../types/global";
import Button from "../../components/common/Button";

const { width } = Dimensions.get("window");

type OnboardingNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

interface OnboardingSlide {
  id: number;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

const OnboardingScreen: React.FC = () => {
  const navigation = useNavigation<OnboardingNavigationProp>();
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Theme-aware colors
  const bgColor = useColorModeValue("white", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");
  const subtitleColor = useColorModeValue(
    "light.textSecondary",
    "dark.textSecondary"
  );
  const dotActiveColor = useColorModeValue("primary.500", "primary.400");
  const dotInactiveColor = useColorModeValue("gray.300", "gray.600");

  const slides: OnboardingSlide[] = [
    {
      id: 1,
      icon: "🏭",
      titleKey: "onboarding.slide1.title",
      descriptionKey: "onboarding.slide1.description",
    },
    {
      id: 2,
      icon: "📊",
      titleKey: "onboarding.slide2.title",
      descriptionKey: "onboarding.slide2.description",
    },
    {
      id: 3,
      icon: "📈",
      titleKey: "onboarding.slide3.title",
      descriptionKey: "onboarding.slide3.description",
    },
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigation.replace("Auth");
    }
  };

  const handleSkip = () => {
    navigation.replace("Auth");
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = slides[currentSlide];

  return (
    <Box flex={1} bg={bgColor} safeArea>
      {/* Skip button */}
      <HStack justifyContent="flex-end" p={4}>
        <Pressable onPress={handleSkip}>
          <Text color="primary.500" fontSize="md" fontWeight="medium">
            {t("common.skip")}
          </Text>
        </Pressable>
      </HStack>

      {/* Content */}
      <VStack
        flex={1}
        alignItems="center"
        justifyContent="center"
        px={8}
        space={8}
      >
        {/* Icon */}
        <Text fontSize="6xl" textAlign="center">
          {slide.icon}
        </Text>

        {/* Title and Description */}
        <VStack space={4} alignItems="center">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            textAlign="center"
            color={textColor}
          >
            {t(slide.titleKey)}
          </Text>
          <Text
            fontSize="md"
            textAlign="center"
            color={subtitleColor}
            lineHeight="lg"
          >
            {t(slide.descriptionKey)}
          </Text>
        </VStack>

        {/* Dots indicator */}
        <HStack space={2} alignItems="center">
          {slides.map((_, index) => (
            <Box
              key={index}
              w={index === currentSlide ? 8 : 2}
              h={2}
              borderRadius="full"
              bg={index === currentSlide ? dotActiveColor : dotInactiveColor}
            />
          ))}
        </HStack>
      </VStack>

      {/* Bottom navigation */}
      <HStack justifyContent="space-between" alignItems="center" p={6}>
        <Pressable
          onPress={handlePrevious}
          opacity={currentSlide === 0 ? 0 : 1}
        >
          <Text color="primary.500" fontSize="md" fontWeight="medium">
            {t("common.previous")}
          </Text>
        </Pressable>

        <Button onPress={handleNext} px={8} py={3}>
          {currentSlide === slides.length - 1
            ? t("common.done")
            : t("common.next")}
        </Button>
      </HStack>
    </Box>
  );
};

export default OnboardingScreen;
