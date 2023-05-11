import { NextPage } from 'next'
import Layout from '../components/layouts/Layout';
import LoginPage from '@/components/layouts/Login';

interface Props {}

const ProjectsPage: NextPage<Props> = ({}) => {
  return (
    <Layout title='Login'>
      <LoginPage/>
    </Layout>
  )
}

export default ProjectsPage