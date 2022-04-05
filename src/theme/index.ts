import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter ${base.fonts?.body}`,
  },
  components: {
    Link: {
      variants: {
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
    },
  },
});

export default theme;
