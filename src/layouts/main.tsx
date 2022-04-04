import Head from 'next/head';
// import { Container } from '@chakra-ui/react';
import { Header, Footer } from '../components';

interface MainProps {
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
  title?: string;
  description?: string;
}

const Main = ({ children, title, description }: MainProps): JSX.Element => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Main;
