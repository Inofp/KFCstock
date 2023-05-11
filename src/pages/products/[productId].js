import React from 'react';
import Product from '../../components/layouts/Product';
import userData from './../../components/layouts/data';
import Layout from '../../components/layouts/Layout';

export const getServerSideProps = async (context) => {
    console.log(context);
    const { productId } = context.params;
    const data = userData.items[productId];

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { product: data }
    }
}



const PrudoctPage = ({ product }) => {
    return (
        <Layout title='Catalog'>
            <Product product={product} />
        </Layout>

    );
};

export default PrudoctPage;