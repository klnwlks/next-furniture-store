import styles from './Footer.module.scss'
import type { FC } from 'react'

const Footer: FC = () => {
  return (
    <div id={styles.footer}>
      <div className={styles.contact}>
	<h3>Get in Touch</h3>
	<a>+~~ ~~~ ~~~~ ~~~</a>
	<a>support.mockup@email.com</a>
      </div>

      <div className={styles.copyright}>
	<p>©2022 mockup</p>
      </div>
    </div>
  )
}

export default Footer
