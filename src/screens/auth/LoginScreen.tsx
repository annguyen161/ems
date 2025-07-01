import React, { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Checkbox,
  Pressable,
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

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Login"
>;

interface LoginForm {
  email: string;
  password: string;
}

interface LoginErrors {
  email?: string;
  password?: string;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginErrors>({});

  // Theme-aware colors
  const bgColor = useColorModeValue("white", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");
  const subtitleColor = useColorModeValue(
    "light.textSecondary",
    "dark.textSecondary"
  );

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Navigate to main app
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } catch (error) {
      console.log("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  const updateForm = (field: keyof LoginForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Box flex={1} bg={bgColor}>
      <Header title={t("auth.loginTitle")} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} p={6} flex={1}>
            {/* Title and subtitle */}
            <VStack space={2} alignItems="center" mt={8}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                color={textColor}
                textAlign="center"
              >
                {t("auth.loginTitle")}
              </Text>
              <Text fontSize="md" color={subtitleColor} textAlign="center">
                {t("auth.loginSubtitle")}
              </Text>
            </VStack>

            {/* Form */}
            <VStack space={4} mt={8}>
              <Input
                label={t("common.email")}
                placeholder={t("auth.emailPlaceholder")}
                value={form.email}
                onChangeText={(text) => updateForm("email", text)}
                error={errors.email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <Input
                label={t("common.password")}
                placeholder={t("auth.passwordPlaceholder")}
                value={form.password}
                onChangeText={(text) => updateForm("password", text)}
                error={errors.password}
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
              />

              {/* Remember me and forgot password */}
              <HStack justifyContent="space-between" alignItems="center">
                <Checkbox
                  value="remember"
                  isChecked={rememberMe}
                  onChange={setRememberMe}
                  colorScheme="primary"
                >
                  <Text fontSize="sm" color={textColor}>
                    {t("auth.rememberMe")}
                  </Text>
                </Checkbox>

                <Pressable onPress={handleForgotPassword}>
                  <Text fontSize="sm" color="primary.500" fontWeight="medium">
                    {t("common.forgotPassword")}
                  </Text>
                </Pressable>
              </HStack>

              {/* Login button */}
              <Button
                onPress={handleLogin}
                isLoading={isLoading}
                isDisabled={isLoading}
                mt={4}
                py={4}
              >
                {t("common.login")}
              </Button>
            </VStack>

            {/* Sign up link */}
            <HStack justifyContent="center" alignItems="center" mt={8}>
              <Text fontSize="sm" color={subtitleColor}>
                {t("auth.dontHaveAccount")}
              </Text>
              <Pressable ml={1}>
                <Text fontSize="sm" color="primary.500" fontWeight="medium">
                  {t("auth.signUp")}
                </Text>
              </Pressable>
            </HStack>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};

export default LoginScreen;
