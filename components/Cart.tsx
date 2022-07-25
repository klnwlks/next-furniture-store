import type { FC, Key } from 'react'
import type { ICartItem } from '../types/types'

import styles from './Cart.module.scss'


const Cart: FC<{cart: ICartItem[]}> = (props: {cart: ICartItem[]}) => {
  return (
    <div id={styles.cart}>
      {props.cart.map((el: ICartItem) => (
      <div className={styles.cartItem} key={el.id as Key}> 
	<h3>{el.name}</h3>

	<div className={styles.details}>
	  <p>{el.quantity}</p>
	  <p>{el.price}</p>
	</div>

	<a href={`/items/${el.id}`}>
	  View this item
	</a>
      </div>
      ))} 

      <a href='/checkout'>
	Checkout
      </a>
    </div>
  )
}

export default Cart
