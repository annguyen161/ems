import React from "react";
import {
  HStack,
  Text,
  IconButton,
  useColorModeValue,
  StatusBar,
  Box,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  rightIcon?: string;
  onRightPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subtitle,
  showBackButton = false,
  onBackPress,
  rightIcon,
  onRightPress,
}) => {
  // Theme-aware colors
  const bgColor = useColorModeValue("white", "dark.surface");
  const textColor = useColorModeValue("light.text", "dark.text");
  const subtitleColor = useColorModeValue(
    "light.textSecondary",
    "dark.textSecondary"
  );
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const statusBarStyle = useColorModeValue("dark-content", "light-content");

  return (
    <>
      <StatusBar barStyle={statusBarStyle} backgroundColor={bgColor} />
      <Box bg={bgColor} safeAreaTop>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={3}
          bg={bgColor}
        >
          {/* Left side - Back button or spacer */}
          <Box w={10}>
            {showBackButton && (
              <IconButton
                icon={<Icon name="arrow-back" size={24} color={iconColor} />}
                onPress={onBackPress}
                variant="ghost"
                _pressed={{ bg: "gray.100", _dark: { bg: "gray.800" } }}
              />
            )}
          </Box>

          {/* Center - Title and subtitle */}
          <Box flex={1} alignItems="center">
            <Text
              fontSize="lg"
              fontWeight="bold"
              color={textColor}
              textAlign="center"
              numberOfLines={1}
            >
              {title}
            </Text>
            {subtitle && (
              <Text
                fontSize="sm"
                color={subtitleColor}
                textAlign="center"
                numberOfLines={1}
              >
                {subtitle}
              </Text>
            )}
          </Box>

          {/* Right side - Action button or spacer */}
          <Box w={10}>
            {rightIcon && (
              <IconButton
                icon={<Icon name={rightIcon} size={24} color={iconColor} />}
                onPress={onRightPress}
                variant="ghost"
                _pressed={{ bg: "gray.100", _dark: { bg: "gray.800" } }}
              />
            )}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Header;
