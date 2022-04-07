import type { NextPage } from 'next';
import Layout from 'src/layouts/main';

const Home: NextPage = () => {
  return (
    <Layout title="CMS" description="Система контроля контентом">
      <div>settings general</div>
    </Layout>
  );
};

export default Home;
