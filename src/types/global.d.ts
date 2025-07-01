// Global type definitions for React Native
declare var __DEV__: boolean;

// Navigation types
export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Report: undefined;
  Devices: undefined;
  Group: undefined;
  Setting: undefined;
};

// App types
export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Device {
  id: string;
  name: string;
  status: "online" | "offline" | "maintenance";
  lastSeen: Date;
}

export interface Group {
  id: string;
  name: string;
  devices: Device[];
}

export interface Report {
  id: string;
  title: string;
  type: "daily" | "weekly" | "monthly" | "custom";
  data: any;
  createdAt: Date;
}
