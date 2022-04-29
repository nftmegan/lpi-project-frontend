import { NextPage } from 'next';

import AuthenticationLayout from '../components/Layouts/AuthenticationLayout';
import RegisterPage from '../components/Authentication/RegisterPage';

const IndexPage: NextPage = () => {
  return (
      <AuthenticationLayout>
        <RegisterPage/>
      </AuthenticationLayout>
  );
};

export default IndexPage;