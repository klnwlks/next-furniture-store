import type {ReactNode} from 'react'
import styles from './Rating.module.scss'

function Rating(props: {rating: number}){
  function setRating(){
    let starArr: ReactNode[] = []
    let starN = Math.round(props.rating)
    for (let i = 0; i < starN; i++){
      starArr.push(
	<div key={Math.floor(i * 5)} className={styles.star}>
	  <div className={styles.starcol}/>
	</div>
      ) 
    }

    if (props.rating - starN > 0) {
      starArr.push(
	<div key={6} className={styles.star}>
	  <div className={styles.halfstar} />
	</div>
      )
    }

    return starArr
  }

  return (
    <div className={styles.container}>
      {setRating()}
      <p>{props.rating}</p>
    </div>
   )
}

export default Rating
