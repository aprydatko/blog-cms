import Layout from 'src/layouts/main';

interface PostsProps {
  title: string;
  description: string;
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
}

const Posts = ({ title, description, children }: PostsProps): JSX.Element => {
  return (
    <Layout title={title} description={description}>
      {children}
    </Layout>
  );
};

export default Posts;
