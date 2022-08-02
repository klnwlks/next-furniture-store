import type { FC } from 'react'
import type { ICartItem } from '../types/types'

import { useEffect } from 'react'
import styles from './Cart.module.scss'
import CartItem from './CartItem'

const Cart: FC<{cart: ICartItem[]}> = (props: {cart: ICartItem[]}) => {
  useEffect(() => {
    console.log(props.cart.length)
      })
  return (
    <div id={styles.cart}>
      <div className={styles.container}>
      {props.cart.length > 0 ? 
      props.cart.map((el: ICartItem) => (
	<CartItem 
	  cart={el}
	/>
      )) :
	<div className={styles.empty}>
	  <h2> Your cart is empty </h2>
	</div>
      } 
      </div>

      <a href='/checkout' className={styles.checkout}>
	Checkout
      </a>
    </div>
  )
}

export default Cart
