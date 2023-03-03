import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {

    const data = [
        {
            id:1,
            img: "/Images/DataFP/HelmetBogotto.jpg",
            title: "Bogotto FF122 Helmet",
            desc: "Helmet",
            oldPrice: 115,
            price: 99,
        },
        {
            id:2,
            img: "/Images/DataFP/Jacket1.jpg",
            title: "Berik Wild Chase Motorcycle Leather Jacket",
            desc: "Jacket",
            oldPrice: 140,
            price: 100,
        },
    ]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
            <div className='item' key={item.id}>
                <img src={item.img} alt=""/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'> 1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete'/>
            </div>
        ))}
        <div className='total'>
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart