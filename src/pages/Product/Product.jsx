import React, { useState } from 'react'
import "./Product.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const [quantity, setQuantity] = useState(1)
  const Images = [
    "/Images/DataFP/Jacket1.jpg",
    "/Images/DataFP/Jacket2.jpg"
  ]

  
  return (
    <div className='product'>
      <div className="left">
        <div className="images">
          <img src={Images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={Images[1]} alt="" onClick={e=>setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={Images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, doloremque odio possimus voluptate aperiam exercitationem sit aliquid hic eius, tenetur deserunt obcaecati consequuntur eveniet natus velit ea repudiandae atque? Quas?</p>
        <div className="quantity">
          <button 
            onClick={()=>setQuantity(prev=>prev === 1 ?  1 : prev - 1)}>-
          </button>
            {quantity}
          <button
            onClick={()=>setQuantity(prev=>prev + 1)}>+
          </button>
        </div>

        <button className='add'>
          <ShoppingCartOutlinedIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Product: Berik </span>
          <span>Product Type: Jacket</span>
          <span>Tag: Jacket, Motocycle, Top</span>
        </div>
        <hr/>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product