import React from "react";
import { Box, Text, useColorModeValue } from "native-base";
import { useTranslation } from "react-i18next";
import Header from "../../../components/common/Header";

const DevicesScreen: React.FC = () => {
  const { t } = useTranslation();
  const bgColor = useColorModeValue("white", "dark.background");
  const textColor = useColorModeValue("light.text", "dark.text");

  return (
    <Box flex={1} bg={bgColor}>
      <Header title={t("devices.title")} subtitle={t("devices.subtitle")} />
      <Box flex={1} alignItems="center" justifyContent="center">
        <Text fontSize="lg" color={textColor}>
          {t("devices.title")} Screen
        </Text>
      </Box>
    </Box>
  );
};

export default DevicesScreen;
