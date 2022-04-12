import type { NextPage } from 'next';
import Layout from 'src/layouts/posts';
import EditBlog from 'src/components/Forms/Blog/EditBlog/EditBlog';

const NewPost: NextPage = () => {
  return (
    <Layout
      title="CMS"
      description="Система контроля контентом"
      backgroundColor="white"
    >
      <EditBlog />
    </Layout>
  );
};

export default NewPost;
