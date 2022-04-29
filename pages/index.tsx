import { NextPage } from 'next';

import MainLayout from '../components/Layouts/MainLayout';
import LandingPage from '../components/LandingPage';

const IndexPage: NextPage = () => {
  return (
      <MainLayout>
        <LandingPage/>
      </MainLayout>
  );
};

export default IndexPage;