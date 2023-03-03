import React from 'react'
import "./Footer.scss"


const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Helmet</span>
          <span>Jackets</span>
          <span>Gloves</span>
          <span>Boots</span>
          <span>Pants</span>
          <span>Accesories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compaer</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque delectus repellat nulla modi aut ut quia omnis velit vitae voluptate, inventore laborum molestias eius officiis maiores placeat ullam, iure tempora.</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>+40758309988</span>
          <span>Email: aporcariteiadrian.@gmail.com</span>
          <span><a href='www.linkedin.com/in/adrian-aporcaritei-0023851a8'>LinkedIn</a></span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">MX Motor Toys</div>
          <div className="copyright">
          © Copyright 2023. All Rights Reserved
          </div>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer