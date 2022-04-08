import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Link: ComponentStyleConfig = {
  baseStyle: {
    color: 'blue.500',

    _hover: {
      color: 'blue.600',
      textDecoration: 'none',
    },
  },
  variants: {
    primary: {
      color: 'blue.500',

      _hover: {
        color: 'blue.300',
      },
    },
    'header-menu': {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: 2,
      color: 'white',

      _hover: {
        color: 'blue.300',
        textDecorationLine: 'none',
      },
    },
    'navigation-menu': {
      fontSize: 'sm',
      fontWeight: 400,
      lineHeight: 1,
      color: 'white',

      _hover: {
        color: 'blue.300',
        textDecorationLine: 'none',
      },
    },
    'navigation-submenu': {
      position: 'relative',
      fontSize: 'sm',
      fontWeight: 400,
      lineHeight: 2,
      color: 'white',

      _hover: {
        color: 'blue.300',
        textDecorationLine: 'none',

        _before: {
          content: `""`,
          position: 'absolute',
          top: '0px',
          left: '-10px',
          width: '3px',
          height: '28px',
          background: 'blue.300',
        },
      },
    },
  },
};
