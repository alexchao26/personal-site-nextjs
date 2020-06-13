import { container } from '@styles/pages/404.module.scss';
import Layout from '@components/layout';

export default () => (
  <Layout>
    <div className={container}>
      <h1>404 - Page Not Found</h1>
    </div>
  </Layout>
);
