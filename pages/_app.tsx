import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/theme.scss';
const Layout = dynamic(() => import('../component/common/Layout'));

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

// App.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { pageProps };
// };

export default App;
