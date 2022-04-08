import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    control: {
      borderRadius: 'none',

      _focus: {
        ring: 0,
      },
    },
  },
};
