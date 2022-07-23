import type { FC } from 'react'

const Cart: FC<{cart: any}> = (props: {cart: Object}) => {
  props.cart
  return (
    <div id='cart'>
    </div>
  )
}

export default Cart
