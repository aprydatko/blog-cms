import type { NextPage } from 'next';
import Layout from 'src/layouts/main';

const Home: NextPage = () => {
  return (
    <div>
      <Layout title="CMS" description="Система контроля контентом">
        <div>main</div>
      </Layout>
    </div>
  );
};

export default Home;
