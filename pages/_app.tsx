import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import '../src/theme/styles.css';
import theme from '../src/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
