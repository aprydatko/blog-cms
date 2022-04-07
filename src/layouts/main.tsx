import Head from 'next/head';
import { Container, Flex } from '@chakra-ui/react';
import { Header, Navigation } from '../components';

interface MainProps {
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
  title?: string;
  description?: string;
}

const Main = ({ children, title, description }: MainProps): JSX.Element => {
  return (
    <Container maxW="100wv" p={0}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Flex w="full" h="100vh">
        <Navigation />
        <Container maxW="container.2xl" mt="35px" py={4}>
          {children}
        </Container>
      </Flex>
    </Container>
  );
};

export default Main;
