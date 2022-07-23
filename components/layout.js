import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer /> 
    </>
  )  
}

export default Layout
