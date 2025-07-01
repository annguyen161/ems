import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  useColorModeValue,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import { AuthStackParamList } from "../../types/global";
import Button from "../../components/common/Button";
import Input from "../../components/common/Input";
import Header from "../../components/common/Header";

type ForgotPasswordNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "ForgotPassword"
>;

const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation<ForgotPasswordNavigationProp>();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Theme-aware colors
  const bgColor = useColorModeValue("white", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");
  const subtitleColor = useColorModeValue(
    "light.textSecondary",
    "dark.textSecondary"
  );

  const handleResetPassword = async () => {
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Show success message and navigate back
      navigation.goBack();
    } catch (err) {
      setError("Failed to send reset email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box flex={1} bg={bgColor}>
      <Header
        title={t("auth.forgotPasswordTitle")}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} p={6} flex={1}>
            <VStack space={2} alignItems="center" mt={8}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={textColor}
                textAlign="center"
              >
                {t("auth.forgotPasswordTitle")}
              </Text>
              <Text fontSize="md" color={subtitleColor} textAlign="center">
                {t("auth.forgotPasswordSubtitle")}
              </Text>
            </VStack>

            <VStack space={4} mt={8}>
              <Input
                label={t("common.email")}
                placeholder={t("auth.emailPlaceholder")}
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                  setError("");
                }}
                error={error}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <Button
                onPress={handleResetPassword}
                isLoading={isLoading}
                isDisabled={isLoading}
                mt={4}
                py={4}
              >
                {t("auth.resetPassword")}
              </Button>
            </VStack>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default ForgotPasswordScreen;
