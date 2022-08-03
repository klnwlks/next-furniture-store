import type {ICartItem} from '../types/types'

import { useEffect, useState, useRef, RefObject, FC } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Cart from './Cart'

const Header: FC = () => {
  const [search, setSearch] = useState<String>()
  const [show, setShow] = useState<Boolean>(false)
  const [ccart, setCart] = useState<ICartItem[]>()

  const headEl = useRef() as RefObject<HTMLDivElement>
  const cart = useRef() as RefObject<HTMLDivElement>

  useEffect(() => {
    window.addEventListener('wheel', () => {
      if (window.scrollY > 250) {
	headEl.current!.style.position = 'fixed'
	headEl.current!.style.boxShadow = '0 8px 24px 0 rgba(0,0,0,.15)'
      } 

      if (window.scrollY < 250) {
	headEl.current!.style.position = 'static'
	headEl.current!.style.boxShadow = 'none'
      } 
    })

    // change later
    cart.current!.addEventListener('mouseover', () => { setShow(true) })
    cart.current!.addEventListener('mouseleave', () => { setShow(false) })
  }, [])

  useEffect(() => {
    setCart(JSON.parse(localStorage.cart))
  }, [typeof window != 'undefined' ? localStorage.cart : null])

  return (
    <div ref={headEl} id={styles.header}>
      <div className={styles.links}>
	<Link href='/'>
	  <div className={styles.logo}>
	    <img className={styles.image} src='/logo.png' alt='logo' /> 
	  </div>
	</Link>
	<a href='/account'>
	  <div className={styles.account}>
	    <img src='/icons/account.png' alt='account' />
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
	    <img src='/icons/cart.png' alt='cart'/>
	  </Link>
	  {show ? <Cart cart={ccart} /> : null}
	</div>
	
      </div>
    </div>
  )
}

export default Header
