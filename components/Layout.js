import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
      <Head>
        <title> MKT - {pagina} </title>
        <meta name='description' content='agencia de marketing'/>
        </Head>
        <Header />

      {children}
      <Footer  />
    </div>
  )
}

export default Layout
