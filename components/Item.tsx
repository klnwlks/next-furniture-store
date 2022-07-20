import type {IPreview} from '../types/types'
import styles from './Item.module.scss'
import Rating from './Rating'

function Item(props: IPreview){
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
