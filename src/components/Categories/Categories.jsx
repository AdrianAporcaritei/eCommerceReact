import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="/Images/DataFP/CatAcces.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
              Accessories
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="/Images/DataFP/CatGloves.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Gloves
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="/Images/DataFP/CatHelmet.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Helmets
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="/Images/DataFP/CatJackets.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Jackets
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="/Images/DataFP/CatBoots.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                  Boots
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="/Images/DataFP/raceSuit.webp"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Suits
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories