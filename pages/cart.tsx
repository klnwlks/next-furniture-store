import type {FC} from 'react'
import type { ICartItem } from '../types/types'

import Head from 'next/head'
import CartItem from '../components/CartItem'
import { useState, useEffect } from 'react'
import styles from '../styles/Cart-page.module.scss' 
import mockup from '../public/mockup/cart.json'

const Cart: FC = () => {
  const [cart, setCart] = useState<ICartItem[]>(Array);

  useEffect(() => {
    if (localStorage.cart) {
      setCart(JSON.parse(localStorage.cart)) } else {
      setCart(mockup.data)
    }
  }, [])

  if (typeof window != 'undefined'){
    useEffect(() => {
      if (localStorage.cart){
      setCart(JSON.parse(localStorage.cart))
      }
    }, [localStorage.cart])
  }

  const remove = (id: number) => {
    let temp = [...cart]
    let i = temp.findIndex((c: ICartItem) => c.id == id)

    if (temp[i].quantity! > 1) temp[i].quantity!--
    else temp.splice(i, 1)

    setCart(temp)
  }

  const changeQty = (n: number, id: number) => {
    let temp = [...cart]
    let i = temp.findIndex((c: ICartItem) => c.id == id)
    if (n) temp[i].quantity!++ 
    else temp[i].quantity!--

    if (temp[i].quantity! < 1) remove(id)
    setCart(temp)
  }

  return (
    <div id={styles.cart}>
      <Head>
	<title>Your Cart | Mockup</title>
      </Head>

      {cart.length > 0 ?
	<div className={styles.container}>
	  <h1>Your Shopping Cart</h1>
	  {cart.map((el: ICartItem) => (
	    <CartItem key={el.id}
		cart={el}
		remove={remove}
	    />
	  ))}
	</div>
      :
	<div className={styles.empty}>
	  <h1>Your Shopping Cart</h1>
	  <p>Your cart is currently empty</p>
	  <a href='/'>Back to home</a>
	</div>
      }

      <div className={styles.checkout}>
	<a href='/checkout'>
	  Checkout
	</a>
      </div>
    </div>
  )
}


export default Cart
