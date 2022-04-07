import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from '@chakra-ui/react';

import {
  inputSelectStyles,
  brandRing,
  linkStyles,
  buttonStyles,
} from './components';

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: '#fff',
        100: '#f0f0f1',
        200: '#3c434a',
        300: '#63B3ED',
        400: '#3182CE',
        500: '#2B6CB0',
        600: '#FC8181',
        700: '#E53E3E',
        800: 'rgba(255, 255, 255, 0.06)',
        900: '#222',
      },
      background: {
        light: '#fff',
        subMenu: '#3c434a',
        dark: '#222',
      },
      input: {
        border: 'blue.300',
        secondary: 'blue.500',
      },
    },
    fonts: {
      heading: `Montserrat, ${base.fonts?.heading}`,
      body: `Inter ${base.fonts?.body}`,
    },
    components: {
      Link: { ...linkStyles },
      Button: { ...buttonStyles },
      Input: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: 'none',

            _focus: {
              ring: 0,
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: 'brand',
    components: ['Checkbox'],
  }),
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select'],
  })
);

export default theme;
