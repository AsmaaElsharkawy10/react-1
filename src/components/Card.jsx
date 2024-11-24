// react function   rfc

import React from 'react'
import image from "../assets/2.jpg"
import "../style/card.css"

export default function Card() {
  return (
    <div>
        <div className='card'>
            <div className='card_img'>
                <img src={image} alt="" srcset="" />
            </div>
            <h2>Burger</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias fugiat, doloribus atque doloremque eaque aut dolore .</p>
            <button>Details</button>
        </div>
    </div>
  )
}

