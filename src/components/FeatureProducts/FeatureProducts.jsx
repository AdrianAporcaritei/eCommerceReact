import React from 'react'
import "./FeatureProducts.scss"
import Card from "../Card/Card"




const FeatureProducts = ({type}) => {

    const data = [
        {
            id:1,
            img: "Images/DataFP/HelmetBogotto.jpg",
            img2: "Images/DataFP/HelmetBogotto2.jpg",
            title: "Bogotto FF122 Helmet",
            specialOffer: true,
            oldPrice: 115,
            price: 99,
        },
        {
            id:2,
            img: "Images/DataFP/Jacket1.jpg",
            img2: "Images/DataFP/Jacket2.jpg",
            title: "Berik Wild Chase Motorcycle Leather Jacket",
            specialOffer: true,
            oldPrice: 140,
            price: 100,
        },
        {
            id:3,
            img: "Images/DataFP/Enduro1.jpg",
            img2: "Images/DataFP/Enduro2.jpg",
            title: "Bogotto V328 Camo Fiberglass Motocross Helmet",
            specialOffer: true,
            oldPrice: 130,
            price: 110,
        },
        {
            id:4,
            img: "Images/DataFP/JacketCafe1.jpg",
            img2: "Images/DataFP/JacketCafe2.jpg",
            title: "Black-Cafe London Bangkok Motorcycle Leather Jacket",
            specialOffer: true,
            oldPrice: 130,
            price: 110,
        }
    ]
  return (
    <div className="featureProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit a
            met consectetur, adipisicing elit. Sapiente earum laborum deserunt sit beatae eligendi. Quidem temporibus harum, dolorum error nesciunt numquam alias. Quasi corrupti rerum eligendi placeat ipsam ut!</p>
        </div>

        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeatureProducts;