import { useEffect, useState, useRef, RefObject, FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

import Cart from './Cart'

const Header: FC = () => {
  const [search, setSearch] = useState<String>()
  const [show, setShow] = useState<Boolean>(false)

  const headEl = useRef() as RefObject<HTMLDivElement>
  const cart = useRef() as RefObject<HTMLDivElement>

  useEffect(() => {
    window.addEventListener('wheel', () => {
      if (window.scrollY > 200) {
	headEl.current!.style.position = 'fixed'
	headEl.current!.style.boxShadow = '0 8px 24px 0 rgba(0,0,0,.15)'
      } 

      if (window.scrollY < 200) {
	headEl.current!.style.position = 'static'
	headEl.current!.style.boxShadow = 'none'
      } 
    })

    // change later
    cart.current!.addEventListener('mouseover', () => { setShow(true) })
    cart.current!.addEventListener('mouseleave', () => { setShow(false) })
  }, [])

  return (
    <div ref={headEl} id={styles.header}>
      <div className={styles.links}>
	<Link href='/'>
	  <img className={styles.image} /> 
	</Link>
	<a href='/account'>
	  <div className={styles.account}>
	    <img src='/icons/account.png'/>
	    <p>Account</p>
	  </div>
	</a>
      </div>

      <div className={styles.right}>
	<form className={styles.search}>
	  <input type='text' placeholder='Search..' value={search as string} 
	  onChange={(e) => setSearch(e.target.value)}/>

	  <input type='image' value='submit' src='/icons/magnify.png' /> 
	</form>

	<div className={styles.cart} ref={cart}>
	  <Link href='/cart'>
	    <img src='/icons/cart.png' />
	  </Link>
	  {show ? <Cart cart={[]} /> : null}
	</div>
	
      </div>
    </div>
  )
}

export default Header
