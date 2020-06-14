import { useRouter } from 'next/router';

import '@styles/global.scss';
import Layout from '@components/layout';

// default App component
export default ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <Layout currentPage={router.pathname}>
      <Component {...pageProps} />
    </Layout>
  );
};
