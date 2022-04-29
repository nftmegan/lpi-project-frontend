import { NextPage } from 'next';

import AuthenticationLayout from '../../components/Layouts/AuthenticationLayout';
import CategoryCreate from '../../components/Category/Create';

const IndexPage: NextPage = () => {
  return (
      <AuthenticationLayout>
        <CategoryCreate/>
      </AuthenticationLayout>
  );
};

export default IndexPage;