import React, { ReactElement } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import Layout from '../components/Layout'
import Favicon from "../components/Favicon/Favicon"

import '../styles/app.scss'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Head>
        <Favicon />
        <title>Control your creeps</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
