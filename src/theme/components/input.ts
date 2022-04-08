import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Input: ComponentStyleConfig = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'brand.300',
        },
      },
    },
    search: {
      field: {
        fontWeight: 'normal',
        border: '1px solid',
        borderColor: 'blue.500',
      },
    },
  },
  sizes: {
    sm: {
      fontWeight: '300',
      height: '30px',
      field: {
        borderRadius: '3px',
      },
    },
    md: {
      field: {
        borderRadius: 'none',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
};
