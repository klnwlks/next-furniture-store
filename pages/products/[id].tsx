import type { ICartItem, IProduct } from '../../types/types' 
import type { FC, Key } from 'react'

import { useState } from 'react'
import Head from 'next/head'
import styles from '../../styles/Product.module.scss'

interface IProps {
  product: IProduct 
}

const Product: FC<IProps> = ({product}: IProps) => {
  const [qty, setQty] = useState<number>(1)

  const addToCart = (n: number) => {
    if (typeof window == 'undefined') return
    let cart: ICartItem[] = []
    if (localStorage.cart) cart = JSON.parse(localStorage.cart)

    let i = cart.findIndex((c: ICartItem) => c.id == n)

    if (i == -1) {
      cart.push({
	id: n,
	name: product.name,
	price: product.price,
	quantity: 1
      })
    } else {
      cart[i].quantity!++
    }

    localStorage.cart = JSON.stringify(cart)
  }

  return (
    <div id={styles.post}>
      <Head>
	<title>{product.name}</title>
      </Head>
      
      <div className={styles.imgslideshow}>
	{product.imgs.map((el: String, index: number) => (
	  <img src={el as string} 
	    key={el as Key}
	    style={{display: index == 0 ? 'block' : 'none'}}
	    alt={product.name as string}
	    />
	))}
      </div>

      <div className={styles.status}>
	<div>
	  <h1>{product.name}</h1>
	  <h3>${product.price}</h3>

	  <p>{product.desc}</p>
	</div>

	<div className={styles.order}>
	  <div className={styles.quantity}>
	    <input type='number' value={qty}
		   onChange={(e) => setQty(parseInt(e.target.value))}/>
	  </div>

	  {product.stock < 1 ?
	    <div className={styles.outofStock}>
	      <h1> Out of Stock </h1>
	    </div>
	  :
	    <div className={styles.add} onClick={() => addToCart(product.id)}>
	      <h1> Add to Cart </h1>
	    </div>
	  }
	</div>
      </div>
    </div>
  ) 
}

export const getStaticPaths = async () => {
  // const paths = GET(numofproducts)
  let paths: any[] = []
  for (let i = 0; i < 12; i++){
    paths.push({ params: { id: (i + 1).toString()}})
  }
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const id = context.params.id
  // not ES6, but once again, since no backend, have to resort to odd measures
  const product = require(`../../public/mockup/items/${id}.json`)
  // const product: IProduct = await GET(id)
  return {
    props: { product }
  }
}

export default Product
