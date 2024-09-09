import Header from "../components/Header";
import LinkList from "../components/LinkList"
import Head from 'next/head'
import { initGA, logPageView } from '../utils/analytics'
import { useEffect } from 'react';

function IndexPage() {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Sarthak Arora</title>
        <meta
          name="description"
          content="A budding developer with a passion for web and software development."
        />
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"></link>
      </Head>

      <Header />

      <LinkList />


    </div>
  );
}

export default IndexPage;
