// import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import "@/styles/global.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
