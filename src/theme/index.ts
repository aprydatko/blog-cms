import { extendTheme, theme as base } from '@chakra-ui/react';

import { Button, Link, Input, Checkbox, Select, Table } from './components';

const theme = extendTheme({
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
  },
  components: {
    Link,
    Button,
    Input,
    Checkbox,
    Select,
    Table,
  },
});

export default theme;
