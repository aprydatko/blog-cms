import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Select: ComponentStyleConfig = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.300',
        },
      },
    },
    outline: {
      width: 'auto',
      field: {
        borderColor: 'blue.500',
        background: 'white',
        _hover: {
          color: 'blue.700',
          borderColor: 'blue.700',
        },
        _focus: {
          color: 'blue.700',
          borderColor: 'blue.700',
        },
      },
    },
  },
  sizes: {
    sm: {
      field: {
        fontSize: '14px',
        fontWeight: '400',
        height: '30px',
      },
    },
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
};
