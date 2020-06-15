import { useRouter } from 'next/router';

import '@styles/global.scss';
import Layout from '@components/layout';

// default App component
export default ({ Component, pageProps }) => {
  // currentPage prop is used for highlighting the current page in the NavBars
  const router = useRouter();
  return (
    <Layout currentPage={router.pathname}>
      <Component {...pageProps} />
    </Layout>
  );
};
