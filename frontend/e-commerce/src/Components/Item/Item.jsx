import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import all_product from '../assets/all_product'

const Item = (props) => {
  return (
    <div>
      <div className="item">
        <Link to ={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item
