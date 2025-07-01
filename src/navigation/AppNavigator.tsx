import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useColorModeValue } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useTranslation } from "react-i18next";

// Types
import {
  RootStackParamList,
  AuthStackParamList,
  MainTabParamList,
} from "../types/global";

// Screens
import SplashScreen from "../screens/splash/SplashScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";

// Main Tab Screens
import HomeScreen from "../screens/main/home/HomeScreen";
import ReportScreen from "../screens/main/report/ReportScreen";
import DevicesScreen from "../screens/main/devices/DevicesScreen";
import GroupScreen from "../screens/main/group/GroupScreen";
import SettingScreen from "../screens/main/setting/SettingScreen";

const RootStack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();
const MainTab = createBottomTabNavigator<MainTabParamList>();

// Auth Stack Navigator
const AuthNavigator: React.FC = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};

// Main Tab Navigator
const MainNavigator: React.FC = () => {
  const { t } = useTranslation();

  // Theme-aware colors
  const tabBarBg = useColorModeValue("white", "dark.surface");
  const tabBarActiveTint = useColorModeValue("primary.500", "primary.400");
  const tabBarInactiveTint = useColorModeValue("gray.400", "gray.500");
  const tabBarBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: tabBarBg,
          borderTopColor: tabBarBorder,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarActiveTintColor: tabBarActiveTint,
        tabBarInactiveTintColor: tabBarInactiveTint,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginTop: 4,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Report":
              iconName = "assessment";
              break;
            case "Devices":
              iconName = "devices";
              break;
            case "Group":
              iconName = "group";
              break;
            case "Setting":
              iconName = "settings";
              break;
            default:
              iconName = "home";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: t("tabs.home") }}
      />
      <MainTab.Screen
        name="Report"
        component={ReportScreen}
        options={{ tabBarLabel: t("tabs.report") }}
      />
      <MainTab.Screen
        name="Devices"
        component={DevicesScreen}
        options={{ tabBarLabel: t("tabs.devices") }}
      />
      <MainTab.Screen
        name="Group"
        component={GroupScreen}
        options={{ tabBarLabel: t("tabs.group") }}
      />
      <MainTab.Screen
        name="Setting"
        component={SettingScreen}
        options={{ tabBarLabel: t("tabs.setting") }}
      />
    </MainTab.Navigator>
  );
};

// Root Navigator
const AppNavigator: React.FC = () => {
  // Theme-aware navigation theme
  const navigationTheme = {
    dark: false,
    colors: {
      primary: "#2F54EB",
      background: useColorModeValue("#FFFFFF", "#1A1A1A"),
      card: useColorModeValue("#FFFFFF", "#2D2D2D"),
      text: useColorModeValue("#1A202C", "#FFFFFF"),
      border: useColorModeValue("#E2E8F0", "#404040"),
      notification: "#2F54EB",
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Main" component={MainNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
