import type { NextPage } from 'next';
import Layout from 'src/layouts/auth';
import { LostPasswordForm } from 'src/components/Auth';

const LostPassword: NextPage = () => {
  return (
    <Layout
      title="Відновити пароль"
      description="Для того, щоб відновити пароль введіть свою пошту, та підтвердіть новий пароль"
    >
      <LostPasswordForm />
    </Layout>
  );
};

export default LostPassword;
