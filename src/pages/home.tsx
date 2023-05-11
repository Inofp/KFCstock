import { NextPage } from 'next'
import Layout from './../components/layouts/Layout';
import Home from '@/components/layouts/Home';


interface Props {}

const HomePage: NextPage<Props> = ({ }) => {

  return (
    <Layout title='Home'>
      <Home />
    </Layout>
  )
}

export default HomePage
 