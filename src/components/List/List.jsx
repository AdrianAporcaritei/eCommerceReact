import React from 'react'
import "./List.scss"
import Card from '../Card/Card'


const data = [
    {
        id:1,
        img: "/Images/DataFP/HelmetBogotto.jpg",
        title: "Bogotto FF122 Helmet",
        oldPrice: 115,
        price: 99,
    },
    {
        id:2,
        img: "/Images/DataFP/Jacket1.jpg",
        title: "Berik Wild Chase Motorcycle Leather Jacket",
        oldPrice: 140,
        price: 100,
    },
    {
        id:3,
        img: "/Images/DataFP/Enduro1.jpg",
        title: "Bogotto V328 Camo Fiberglass Motocross Helmet",
        oldPrice: 130,
        price: 110,
    },
    {
        id:4,
        img: "/Images/DataFP/JacketCafe1.jpg",
        title: "Black-Cafe London Bangkok Motorcycle Leather Jacket",
        oldPrice: 130,
        price: 110,
    },
    {
        id:1,
        img: "/Images/DataFP/HelmetBogotto.jpg",
        title: "Bogotto FF122 Helmet",
        oldPrice: 115,
        price: 99,
    },
    {
        id:2,
        img: "/Images/DataFP/Jacket1.jpg",
        title: "Berik Wild Chase Motorcycle Leather Jacket",
        oldPrice: 140,
        price: 100,
    },
    {
        id:3,
        img: "/Images/DataFP/Enduro1.jpg",
        title: "Bogotto V328 Camo Fiberglass Motocross Helmet",
        oldPrice: 130,
        price: 110,
    },
    {
        id:4,
        img: "/Images/DataFP/JacketCafe1.jpg",
        title: "Black-Cafe London Bangkok Motorcycle Leather Jacket",
        oldPrice: 130,
        price: 110,
    }
]
const List = () => {
  return (
    // <div className='list'>{data?.map(item =>{<Card item={item} key={item.id}/>})}</div>
    <div className="list">
    {data?.map((item) => <Card item={item} key={item.id} />)}
  </div>
    
  )
}

export default List