import { extendTheme } from 'native-base';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#E5ECFF',
      100: '#C2CFFF',
      200: '#9FB3FF',
      300: '#7C96FF',
      400: '#5979FF',
      500: '#2F54EB', // Primary color
      600: '#1F3DC7',
      700: '#1530A3',
      800: '#0D237F',
      900: '#081B5B',
    },
    secondary: {
      50: '#F0F4FF',
      100: '#D9E2FC',
      200: '#BAC9F9',
      300: '#7C93F0',
      400: '#5475E7',
      500: '#2F54EB',
      600: '#1F3DC7',
      700: '#1530A3',
      800: '#0D237F',
      900: '#081B5B',
    },
    // Light mode colors
    light: {
      background: '#FFFFFF',
      surface: '#F8F9FA',
      text: '#1A202C',
      textSecondary: '#718096',
      border: '#E2E8F0',
      cardBackground: '#FFFFFF',
    },
    // Dark mode colors
    dark: {
      background: '#1A1A1A',
      surface: '#2D2D2D',
      text: '#FFFFFF',
      textSecondary: '#A0A0A0',
      border: '#404040',
      cardBackground: '#2D2D2D',
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'primary',
      },
      variants: {
        solid: {
          bg: 'primary.500',
          _text: {
            color: 'white',
            fontWeight: 'bold',
          },
          _pressed: {
            bg: 'primary.600',
          },
        },
        outline: {
          borderColor: 'primary.500',
          _text: {
            color: 'primary.500',
          },
          _pressed: {
            bg: 'primary.50',
          },
        },
        ghost: {
          _text: {
            color: 'primary.500',
          },
          _pressed: {
            bg: 'primary.50',
          },
        },
      },
    },
    Input: {
      defaultProps: {
        size: 'lg',
        borderRadius: 'md',
      },
      variants: {
        outline: {
          borderColor: 'gray.300',
          _focus: {
            borderColor: 'primary.500',
            bg: 'white',
          },
          _dark: {
            borderColor: 'gray.600',
            _focus: {
              borderColor: 'primary.500',
              bg: 'dark.surface',
            },
          },
        },
      },
    },
    Text: {
      baseStyle: {
        _light: {
          color: 'light.text',
        },
        _dark: {
          color: 'dark.text',
        },
      },
    },
    Heading: {
      baseStyle: {
        _light: {
          color: 'light.text',
        },
        _dark: {
          color: 'dark.text',
        },
      },
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
  fontConfig: {
    Roboto: {
      100: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      200: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      300: {
        normal: 'Roboto-Light',
        italic: 'Roboto-LightItalic',
      },
      400: {
        normal: 'Roboto-Regular',
        italic: 'Roboto-Italic',
      },
      500: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      600: {
        normal: 'Roboto-Medium',
        italic: 'Roboto-MediumItalic',
      },
      700: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      800: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
      900: {
        normal: 'Roboto-Bold',
        italic: 'Roboto-BoldItalic',
      },
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    mono: 'Roboto',
  },
});

export default theme;

// Type definitions for custom theme colors
export type ThemeColors = typeof theme.colors; 