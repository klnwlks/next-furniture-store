import type {FC} from 'react'
import type {ICartItem} from '../types/types'
import styles from './CartItem.module.scss'

interface IProps {
  cart: ICartItem
  remove?(id: number): void
}
 
const CartItem: FC<IProps> = ({cart, remove}: IProps) => {
  return (
    <div className={styles.item}>
      <a href={`/products/${cart.id}`}>
      {cart.img ? 
	<img src={cart.img as string} />
	:
	null
      }

      <div className={styles.content}>
	<h4>{cart.name}</h4>
	<p>{cart.quantity} unit/s</p>
	<p>$ {cart.price * cart.quantity!}</p>
      </div>
      </a>

      {remove ?
	<div className={styles.edit}>
	  <div className={styles.remove} onClick={() => remove(cart.id)}>
	    <p>x</p> 
	  </div>
	</div>
	: null
      }
    </div>
  )
}

export default CartItem;
