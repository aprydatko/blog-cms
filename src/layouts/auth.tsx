import Head from 'next/head';
import { Container } from '@chakra-ui/react';

interface MainProps {
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
  title?: string;
  description?: string;
}

const Auth = ({ children, title, description }: MainProps): JSX.Element => {
  return (
    <Container maxW="100wv" p={0} bg="white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="container.sm" h="100vh">
        {children}
      </Container>
    </Container>
  );
};

export default Auth;
