import { NextPage } from 'next';

import AdminPanelLayout from '../../common/components/Layouts/AdminPanelLayout';
import LandingPage from '../../common/components/LandingPage';

import { useSession, getSession } from "next-auth/react"

const IndexPage: NextPage = () => {
    return (
        <AdminPanelLayout>
          <LandingPage/>
        </AdminPanelLayout>
    );
};

export default IndexPage;