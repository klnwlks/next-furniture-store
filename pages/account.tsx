import type { FC } from 'react'
import type { IUser, ICartItem } from '../types/types'

import * as mockup_USER from '../public/mockup/mockup-user.json'
import styles from '../styles/Account.module.scss'
import Head from 'next/head'

const Account: FC<{user: IUser}> = (props: {user: IUser}) =>{
  return (
    <div id={styles.account}>
      <Head>
	<title>Account Overview</title>
      </Head>

      <h1>{`Hello ${props.user.name}!`}</h1>
      <div className={styles.container}>
	<div className={styles.purchases}>
	  <h2>Purchases</h2>
	  {props.user.purchases.map((el: ICartItem) => (
	    <a href={`/products/${el.id}`} key={el.id}>
	      <div className={styles.item}>
		{el.img ? <img src={el.img as string} alt={el.name as string}/> : null}

		<div className={styles.text}>
		  <p>{el.name}</p>
		  <p>{el.quantity} items</p>
		  <p>₱ {el.price * el.quantity!}</p>
		</div>
	      </div>
	    </a>
	  ))}
	</div>

	<div className={styles.history}>
	  <h2>Recently Viewed</h2>
	  {props.user.history.map((el: ICartItem) => (
	    <a href={`/products/${el.id}`} key={el.id}>
	      <div className={styles.item}>
		{el.img ? <img src={el.img as string} alt={el.name as string} /> : null}

		<div className={styles.text}>
		  <p>{el.name}</p>
		  <p>₱ {el.price}</p>
		</div>
	      </div>
	    </a>
	  ))}
	</div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let user : IUser | undefined

  try {
    // user = await authenticate(localStorage.token)
    // user = await JSON.parse(JSON.stringify('914uirhihrqhrlq')) // since this a mockup, we'll settle for a hardcoded token
    user = await JSON.parse(JSON.stringify(mockup_USER))
  } catch {
    user = undefined
  }

  if (!user) return { 
    props: {}, 
    redirect: { destination: '/login' } 
  }

  return {
    props: { user } 
  }
}

export default Account
