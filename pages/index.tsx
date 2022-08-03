import type { Key, FC } from 'react' 
import type { IPreview, ICategory } from '../types/types'

import Head from 'next/head'
import Item from '../components/Item'
import Category from '../components/Category'
// import Image from 'next/image'

import * as mockup_FEAT from '../public/mockup/featured.json'
import * as mockup_CAT from '../public/mockup/categories.json'
import * as mockup_BEST from '../public/mockup/bestsellers.json'

import styles from '../styles/Home.module.scss'

interface IProps {
  // get static prop returns array as objects, have to access default property to get an array
  featured: {default: IPreview[]}
  cat: {default: ICategory[]}
  bestseller: {default: IPreview[]}
}

const Home: FC<IProps> = ({featured, cat, bestseller}: IProps) => {
  return (
  <div className={styles.container}>
    <Head>
      <title>Furniture</title>
      <meta name='description' content='furniture interior design house' />
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <main className={styles.main}>
      <div className={styles.intro}>
	<div className={styles.text}>
	  <h1 className={styles.title}>
	    This is a test
	  </h1>

	  <p className={styles.description}>
	    A placeholder description
	  </p>
	</div>
      </div>

      <div className={styles.featured}>
	<h1 className={styles.title}> 
	  Featured Furniture 
	</h1>

	<div className={styles.flexrow}>
	  {featured.default.map((el: IPreview) => (
	    <Item key={el.id}
	      id={el.id} name={el.name}
	      img={el.img} price={el.price}
	      rating={el.rating}
	    />
	  ))}

	</div>
      </div>
      
      <div className={styles.categories}>
	<h1 className={styles.title}>
	  Browse by Categories
	</h1>
	<div className={styles.doublegrid}>
	  {cat.default.map((el: ICategory) => (
	    <Category name={el.name} img={el.img} link={el.link} key={el.link as Key}/>
	  ))} 
	</div>
      </div>

      <div className={styles.bestsellercontainer}>
	<h1 className={styles.title}>
	  Bestseller Furniture
	</h1>

	<div className={styles.grid}>
	  {bestseller.default.map((el: IPreview) => (
	    <Item key={el.id}
	      id={el.id} name={el.name}
	      img={el.img} price={el.price}
	      rating={el.rating}
	    />
	  ))}
	</div>
      </div>

      <div className={styles.about}>
	<img className={styles.logo} src='/logo.png' alt='logo'/>

	<p> 
	  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum justo tellus, nec pulvinar nulla volutpat a. Vestibulum nec posuere libero, vitae ultrices justo. Nunc in vehicula nisi. Integer at ante eleifend, consequat felis eget, imperdiet nisi. Pellentesque vitae tempor libero. Morbi at sapien tellus. Mauris eu tempus libero. Suspendisse viverra eros in massa ornare, sed accumsan ante faucibus.
	</p>
      </div>
    </main>
  </div>
  )
}

export async function getStaticProps(){
  // had to do it this way to replicate grabbing data from an api
  const featured = await JSON.parse(JSON.stringify(mockup_FEAT))
  const cat = await JSON.parse(JSON.stringify(mockup_CAT))
  const bestseller = await JSON.parse(JSON.stringify(mockup_BEST))

  return {
    props: { featured, cat, bestseller }
  }
}

export default Home
