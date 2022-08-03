import type { ICategory } from '../types/types'
import type { FC } from 'react'

import styles from '../styles/Category.module.scss'

const Category: FC<ICategory> = (props: ICategory) => {
  return (
    <a href={`/search/?=${props.link}`}>
      <div className={styles.container}>
	<div className={styles.imgcontainer}>
	  <img src={props.img as string} alt={props.name as string}/>
	</div>

	<h3>{props.name}</h3>
      </div>
    </a>
  )
}

export default Category
