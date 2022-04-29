import { NextPage } from 'next';
import { useRouter } from 'next/router'

import MainLayout from '../../components/Layouts/MainLayout';
import ProductView from '../../components/Product/View';

const IndexPage: NextPage = () => {
    const router = useRouter();
    const { pid } = router.query;

    return (
        <MainLayout>
            <ProductView pid={pid}/>
        </MainLayout>
    );
};

export default IndexPage;