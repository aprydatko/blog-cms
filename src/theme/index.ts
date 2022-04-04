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
          fontSize: 'xs',
          fontWeight: 400,
          lineHeight: 2,
          color: 'white',

          _hover: {
            color: 'blue.300',
            textDecorationLine: 'none',
          },
        },
      },
    },
  },
});

export default theme;
