import type { NextPage } from 'next';
import Layout from 'src/layouts/auth';
import { RegistrationForm } from 'src/components/Auth';

const SignUp: NextPage = () => {
  return (
    <Layout
      title="Реєстрація"
      description="Для того, щоб заеєструватися, введіть пошту та пароль"
    >
      <RegistrationForm />
    </Layout>
  );
};

export default SignUp;
