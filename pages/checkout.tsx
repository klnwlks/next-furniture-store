import type { FC, FormEvent } from 'react'
import type { ICartItem } from '../types/types'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '../styles/Checkout.module.scss'

interface ICheckout {
  userID: number
  card: string
  exprD: string
  cvc: string 
  region: string
  address: string
  cart: ICartItem[]
}

const temp: ICheckout = {
  userID: 0,
  card: '',
  exprD: '',
  cvc: '',
  region: '',
  address: '',
  cart: []
}

const Checkout: FC = () => {
  const [total, setTotal] = useState<number>(0)
  const [order, setOrder] = useState<ICheckout>(temp)
  const [loggedIn, setLoggedIn] = useState<Boolean>(false)
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.cart ||
      JSON.parse(localStorage.cart) == 0) {
      router.push('/cart') 
    } 

    if (localStorage.token) {
    /* try {
     * authenticate(localStorage.token)
     * setLoggedIn(true)
     * } catch {
     * setLoggedIn(false)
     * }
     * 
    */
      // setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [])
  
  useEffect(() => {
    let temp = 0
    if (localStorage.cart &&
	JSON.parse(localStorage.cart).length > 0){
      JSON.parse(localStorage.cart).forEach((el: ICartItem) => {
	setTotal(temp += (el.price * el.quantity!))
      })
    }
  }, [])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault() 
      /* try {
       *   post(order)
       * } catch {
       *   window.alert('something went wrong, please refresh and try again.')
       * }
     */
  }

  return (
  <div id={styles.checkout}>
    <Head>
      <title>Checkout | Mockup</title>
    </Head>
    <div className={styles.info}>
      <h1> Payment Details </h1>
      <form className={styles.form} onSubmit={onSubmit}>
	<select value={order.region} onChange={(e) => setOrder(porder => {
	  return {
	    ...porder,
	    region: e.target.value
	  }
	})}>
	  <option value='North America'>United States</option>
	  <option value='Europe'>Europe</option>
	  <option value='Asia'>Asia</option>
	  <option value='Australia'>Australia</option>
	</select>

	<input type='text' value={order.address} onChange={(e) =>  
	  setOrder(porder => {return {...porder, address: e.target.value}})
	} placeholder='Address' required />

	<div className={styles.card}>
	  <input type='tel' value={order.card} onChange={(e) => 
	    setOrder(porder => {return { ...porder, card: e.target.value }})
	  } placeholder='Card Number' maxLength={16}
	  pattern='^[0-9]*$' required />

	  <input type='text' value={order.exprD} onChange={(e) => 
	    setOrder(porder => {return { ...porder, exprD: e.target.value }})}
	  placeholder='MM / YY' onFocus={(e) => e.target.type = 'month'} required />

	  <input type='tel' value={order.cvc} onChange={(e) => 
	    setOrder(porder => {return { ...porder, cvc: e.target.value}})
	  } placeholder='CVC' maxLength={3} title='CVC'
	    pattern='^[0-9]*$' required />
	</div>

	{loggedIn ?
	  <input type='submit' value='Continue'/>
	:
	  <input type='submit' className={styles.loggedOut}
	    value='You must be logged in to order' disabled/>
	}
      </form>
    </div>

    <div className={styles.status}>
      <h2>Order Summary</h2>

      <div className={styles.price}>
	<p>Subtotal</p> <p>${total}</p>
	<div className={styles.break} />
	<p>Shipping fees</p> <p>TBD</p>
	<div className={styles.break} />
	<p>Estimated Taxes</p> <p>$0.00</p>
	<div className={styles.break} />
	<h2> Total: ${total} </h2>
      </div>
    </div>
  </div>
  )
}

export default Checkout
