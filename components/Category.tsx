import type { ICategory } from '../types/types'
import type { FC } from 'react'
import Link from 'next/link'

import styles from './Category.module.scss'

const Category: FC<ICategory> = (props: ICategory) => {
  return (
    <Link href={`/search/?=${props.link}`}>
      <div className={styles.container}>
	<div className={styles.imgcontainer}>
	  <img src={props.img as string} />
	</div>

	<h3>{props.name}</h3>
      </div>
    </Link>
  )
}

export default Category
