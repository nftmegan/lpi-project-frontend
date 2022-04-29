import { NextPage } from 'next';

import AuthenticationLayout from '../../components/Layouts/AuthenticationLayout';
import ProductCreate from '../../components/Product/Create';

const IndexPage: NextPage = () => {
  return (
      <AuthenticationLayout>
        <ProductCreate/>
      </AuthenticationLayout>
  );
};

export default IndexPage;