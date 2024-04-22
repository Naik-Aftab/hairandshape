
import Head from 'next/head';
import Navbar from './components/Navbar';
import Bootstrap from './components/bootstrap';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';

export const metadata = {
  title: 'Hair And Shape',
  description: 'Hair And Shape',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* gtm tag */}
      </Head>
      <body>
        {/* gtm tag */}
       <Bootstrap />    
        <Navbar />
        {children}  
        <Footer />   
      </body>
    </html>
  )
}
