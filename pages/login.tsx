import type { NextPage } from 'next';
import Layout from 'src/layouts/auth';
import { LoginForm } from 'src/components/Auth';

const Login: NextPage = () => {
  return (
    <Layout
      title="Авторизація"
      description="Для того, щоб авторизуватися, введіть пошту та пароль"
    >
      <LoginForm />
    </Layout>
  );
};

export default Login;
