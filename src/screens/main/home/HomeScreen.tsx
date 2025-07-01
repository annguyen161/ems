import React from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  ScrollView,
  useColorModeValue,
} from "native-base";
import { useTranslation } from "react-i18next";
import Header from "../../../components/common/Header";

const HomeScreen: React.FC = () => {
  const { t } = useTranslation();

  // Theme-aware colors
  const bgColor = useColorModeValue("white", "dark.background");
  const cardBg = useColorModeValue("white", "dark.cardBackground");
  const textColor = useColorModeValue("light.text", "dark.text");
  const subtitleColor = useColorModeValue(
    "light.textSecondary",
    "dark.textSecondary"
  );

  return (
    <Box flex={1} bg={bgColor}>
      <Header title={t("home.title")} subtitle={t("home.subtitle")} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={4} p={4}>
          {/* Stats Cards */}
          <HStack space={3}>
            <Box flex={1} bg={cardBg} p={4} borderRadius="lg" shadow={1}>
              <VStack space={2}>
                <Text fontSize="3xl" fontWeight="bold" color="primary.500">
                  24
                </Text>
                <Text fontSize="sm" color={subtitleColor}>
                  {t("home.totalDevices")}
                </Text>
              </VStack>
            </Box>

            <Box flex={1} bg={cardBg} p={4} borderRadius="lg" shadow={1}>
              <VStack space={2}>
                <Text fontSize="3xl" fontWeight="bold" color="green.500">
                  18
                </Text>
                <Text fontSize="sm" color={subtitleColor}>
                  {t("home.activeDevices")}
                </Text>
              </VStack>
            </Box>
          </HStack>

          <HStack space={3}>
            <Box flex={1} bg={cardBg} p={4} borderRadius="lg" shadow={1}>
              <VStack space={2}>
                <Text fontSize="3xl" fontWeight="bold" color="orange.500">
                  3
                </Text>
                <Text fontSize="sm" color={subtitleColor}>
                  {t("home.alerts")}
                </Text>
              </VStack>
            </Box>

            <Box flex={1} bg={cardBg} p={4} borderRadius="lg" shadow={1}>
              <VStack space={2}>
                <Text fontSize="3xl" fontWeight="bold" color="blue.500">
                  95%
                </Text>
                <Text fontSize="sm" color={subtitleColor}>
                  Efficiency
                </Text>
              </VStack>
            </Box>
          </HStack>

          {/* Recent Activity */}
          <Box bg={cardBg} p={4} borderRadius="lg" shadow={1} mt={2}>
            <VStack space={3}>
              <Text fontSize="lg" fontWeight="bold" color={textColor}>
                {t("home.recentActivity")}
              </Text>

              <VStack space={2}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text fontSize="sm" color={textColor}>
                    Device #001 came online
                  </Text>
                  <Text fontSize="xs" color={subtitleColor}>
                    2 min ago
                  </Text>
                </HStack>

                <HStack justifyContent="space-between" alignItems="center">
                  <Text fontSize="sm" color={textColor}>
                    Alert: Temperature exceeded
                  </Text>
                  <Text fontSize="xs" color={subtitleColor}>
                    5 min ago
                  </Text>
                </HStack>

                <HStack justifyContent="space-between" alignItems="center">
                  <Text fontSize="sm" color={textColor}>
                    Maintenance completed
                  </Text>
                  <Text fontSize="xs" color={subtitleColor}>
                    1 hour ago
                  </Text>
                </HStack>
              </VStack>
            </VStack>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
