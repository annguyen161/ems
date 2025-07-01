import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Switch,
  Pressable,
  useColorModeValue,
  ScrollView,
  Divider,
  Select,
  CheckIcon,
} from "native-base";
import { useTranslation } from "react-i18next";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Header from "../../../components/common/Header";
import { useTheme } from "../../../hooks/useTheme";
import { changeLanguage, AVAILABLE_LANGUAGES } from "../../../locales";

const SettingScreen: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { colorMode, toggleColorMode } = useTheme();

  // Theme-aware colors
  const bgColor = useColorModeValue("gray.50", "dark.background");
  const cardBg = useColorModeValue("white", "dark.cardBackground");
  const textColor = useColorModeValue("light.text", "dark.text");
  const subtitleColor = useColorModeValue(
    "light.textSecondary",
    "dark.textSecondary"
  );

  const handleLanguageChange = async (languageCode: string) => {
    await changeLanguage(languageCode);
  };

  const currentLanguage = AVAILABLE_LANGUAGES.find(
    (lang) => lang.code === i18n.language
  );

  return (
    <Box flex={1} bg={bgColor}>
      <Header title={t("setting.title")} subtitle={t("setting.subtitle")} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} p={4}>
          {/* Theme Setting */}
          <Box bg={cardBg} p={4} borderRadius="lg" shadow={1}>
            <HStack justifyContent="space-between" alignItems="center">
              <VStack>
                <Text fontSize="md" fontWeight="medium" color={textColor}>
                  {t("common.theme")}
                </Text>
                <Text fontSize="sm" color={subtitleColor}>
                  {colorMode === "light"
                    ? t("common.lightMode")
                    : t("common.darkMode")}
                </Text>
              </VStack>
              <Switch
                isChecked={colorMode === "dark"}
                onToggle={toggleColorMode}
                colorScheme="primary"
              />
            </HStack>
          </Box>

          {/* Language Setting */}
          <Box bg={cardBg} p={4} borderRadius="lg" shadow={1}>
            <VStack space={3}>
              <Text fontSize="md" fontWeight="medium" color={textColor}>
                {t("common.language")}
              </Text>
              <Select
                selectedValue={i18n.language}
                minWidth="200"
                accessibilityLabel={t("common.language")}
                placeholder={t("common.language")}
                _selectedItem={{
                  bg: "primary.100",
                  endIcon: <CheckIcon size="5" />,
                }}
                onValueChange={handleLanguageChange}
              >
                {AVAILABLE_LANGUAGES.map((lang) => (
                  <Select.Item
                    key={lang.code}
                    label={lang.nativeName}
                    value={lang.code}
                  />
                ))}
              </Select>
            </VStack>
          </Box>

          {/* Other Settings */}
          <Box bg={cardBg} p={4} borderRadius="lg" shadow={1}>
            <VStack space={4}>
              <Text fontSize="lg" fontWeight="bold" color={textColor}>
                {t("setting.about")}
              </Text>
              <Text fontSize="sm" color={subtitleColor}>
                iFactory App v1.0.0
              </Text>
              <Text fontSize="sm" color={subtitleColor}>
                Smart Factory Management System
              </Text>
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default SettingScreen;
