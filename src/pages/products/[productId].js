import React from 'react';
import Product from '../../components/layouts/Product';
import userData from './../../components/layouts/data';
import Layout from '../../components/layouts/Layout';

export const getServerSideProps = async (context) => {
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



const ProductPage = ({ product }) => {
    return (
        <Layout title={product.title}>
            <Product product={product} />
        </Layout>

    );
};

export default ProductPage;