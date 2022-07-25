import type { FC, FormEvent, RefObject } from 'react'

import styles from '../styles/Login.module.scss'
import { useRouter } from 'next/router'
import { useState, useRef } from 'react'

const Login: FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState<String>()
  const [password, setPassword] = useState<String>()

  const passwordView = useRef() as RefObject<HTMLInputElement>

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    localStorage.setItem('token', 'wjiqw2941n12nkewqje') // hardcoded, change in actual production environment
    router.push('/account')
  }

  return ( 
    <div id={styles.login}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.container}>
	<form onSubmit={(e) => onSubmit(e)} className={styles.form}>
	  <input type='text' className={styles.email}
	  placeholder='Your email' value={email as string}
	  onChange={(e) => setEmail(e.target.value)}
	  />

	  <div className={styles.passInput}>
	    <input type='password' ref={passwordView} 
	    placeholder='Your password' value={password as string}
	    onChange={(e) => setPassword(e.target.value)}
	    autoComplete='current-password'
	    />
	    <img />
	  </div>

	  <input className={styles.submit} type='submit' value='Log in'/>

	  <p className={styles.reset}>Forgot password? Click <a href='/404'>here</a></p>
	</form>

	<div className={styles.imgcontainer}>
	  <img src='/intro.jpg' /> {/* change later */}
	</div>
      </div>
    </div>
  )
}

export default Login
