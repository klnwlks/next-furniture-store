import type {IPreview} from '../types/types'
import type {FC} from 'react'
import styles from './Item.module.scss'
import Rating from './Rating'

const Item: FC<IPreview> = (props: IPreview) => {
  return (
    <div className={styles.item}>
      <div className={styles.imgdiv}>
	<img src={props.img as string} loading='lazy'/>
      </div>

      <div className={styles.content}>
	<h1>{props.name}</h1>
	<h3>{props.price}</h3>
	<Rating rating={props.rating}/> 
      </div>
    </div>
  )
}

export default Item
