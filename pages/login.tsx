import { NextPage } from 'next';

import AuthenticationLayout from '../components/Layouts/AuthenticationLayout';
import LoginPage from '../components/Authentication/LoginPage';

const IndexPage: NextPage = () => {
  return (
      <AuthenticationLayout>
        <LoginPage/>
      </AuthenticationLayout>
  );
};

export default IndexPage;