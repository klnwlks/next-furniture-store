import styles from '../styles/Home.module.scss'

const Layout = ({children}) => {
  return (
    <>
      <main>{children}</main>
      <footer className={styles.footer}>
	<p>©2022 mockup</p>
      </footer>
    </>
  )  
}

export default Layout
