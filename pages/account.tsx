import styles from '../styles/Account.module.scss'
import type { FC } from 'react'
import { useEffect } from 'react' 

const Account: FC<{user: String}> = (props: {user: String}) =>{
  return (
    <div id={styles.account}>
    </div>
  )
}

export async function getServerSideProps() {
  let user

  try {
    user = await JSON.parse(JSON.stringify('914uirhihrqhrlq')) // since this a mockup, we'll settle for a hardcoded token
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
