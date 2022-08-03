import type { FC } from 'react'
import type { ICartItem } from '../types/types'

import styles from '../styles/Cart.module.scss'
import CartItem from './CartItem'

const Cart: FC<{cart?: ICartItem[]}> = (props: {cart?: ICartItem[]}) => {
  return (
    <div id={styles.cart}>
      <div className={styles.container}>
      {props.cart ? 
      props.cart.map((el: ICartItem, index: number) => (
	<CartItem key={index}
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
