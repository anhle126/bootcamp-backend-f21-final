import React, { useState } from "react"
import styles from '../styles/Home.module.css'
import GradesRow from "./GradesRow"

const RestaurantRow = (props) => {
  const { restaurant } = props
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{width: "100%"}}>
      <div className={styles.row} onClick={() => setExpanded(!expanded)}>
        <h3 className={styles['row-child']}>{restaurant.name}</h3>
        <p className={styles['row-child']}>{restaurant.cuisine}</p>
        <p className={styles['row-child']}>{restaurant.borough}</p>
        <p className={styles['row-child']}>{`${restaurant.address.building} ${restaurant.address.street} ${restaurant.address.zipcode}`}</p>
        <p className={styles['row-child']}>{restaurant.restaurant_id}</p>
    </div>
    {expanded && restaurant.grades.map((g,i) => <GradesRow key={i} grade={g}/>)}
    </div>
  )
}

export default RestaurantRow