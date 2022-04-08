import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
  sizes: {
    xs: {
      height: '27px',
      fontSize: '13px',
      fontWeight: 600,
      padding: '6px 8px',
    },
    sm: {
      height: '30px',
      fontSize: '13px',
      fontWeight: 400,
      padding: '6px 8px',
    },
  },
  variants: {
    outline: {
      border: '1px solid',
      borderRadius: '2px',
      borderColor: 'blue.500',
      color: 'blue.500',

      _hover: {
        borderColor: 'blue.700',
        color: 'blue.700',
      },

      _focus: {
        ring: 0,
        borderColor: 'blue.400',
        color: 'blue.400',
      },
    },
    solid: {
      bg: 'purple.500',
      color: 'white',
    },
    primary: {
      rounded: 'none',
      color: 'white',
      backgroundColor: 'blue.500',

      _hover: {
        backgroundColor: 'blue.400',
      },

      _active: {
        backgroundColor: 'blue.600',
      },

      _focus: {
        ring: 0,
        backgroundColor: 'blue.300',
      },
    },
    secondary: {
      rounded: 'none',
      color: '#222',
      border: '1px solid #CBD5E0',
      backgroundColor: 'white',

      _hover: {
        border: '1px solid #CBD5E0',
        backgroundColor: 'brand.100',
      },

      _active: {
        color: 'white',
        border: '1px solid #CBD5E0',
        backgroundColor: 'brand.200',
      },

      _focus: {
        ring: 0,
        color: 'white',
        border: '1px solid #CBD5E0',
        backgroundColor: 'brand.200',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
