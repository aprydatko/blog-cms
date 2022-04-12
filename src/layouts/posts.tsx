import { TextEditorProvider } from 'src/context/TextEditor';
import Layout from 'src/layouts/main';

interface PostsProps {
  title: string;
  description: string;
  backgroundColor?: string;
  children: React.ReactChild | React.ReactChildren | React.ReactNode;
}

const Posts = ({
  title,
  description,
  children,
  backgroundColor,
}: PostsProps): JSX.Element => {
  return (
    <Layout
      title={title}
      description={description}
      backgroundColor={backgroundColor}
    >
      <TextEditorProvider>{children}</TextEditorProvider>
    </Layout>
  );
};

export default Posts;
