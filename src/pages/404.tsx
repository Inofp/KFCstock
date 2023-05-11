import Layout from '@/components/layouts/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const NotFound: NextPage = () => {
  return (
    <div>
      <Layout title='Not Found'>
        <Image src={'/404.jpg'} alt='' width={560} height={560} /> 404 bruh
      </Layout>
    </div>
  )
}

export default NotFound