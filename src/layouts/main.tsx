import Head from 'next/head';
import { Container, Flex } from '@chakra-ui/react';
import { Header, Navigation } from '../components';

interface MainProps {
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
  title?: string;
  description?: string;
  backgroundColor?: string;
}

const Main = ({
  title,
  children,
  description,
  backgroundColor,
}: MainProps): JSX.Element => {
  return (
    <Container maxW="100wv" p={0}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Flex w="full" h="100vh">
        <Navigation />
        <Container
          maxW="full"
          mt="35px"
          p={0}
          bg={backgroundColor ? backgroundColor : '#f0f0f1'}
        >
          {children}
        </Container>
      </Flex>
    </Container>
  );
};

export default Main;
