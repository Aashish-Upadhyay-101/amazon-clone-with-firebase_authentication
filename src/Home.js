import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(props) {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg"
          alt="background bannner"
        />

        <div className="home__row">
          <Product
            id="12345678"
            title="The Lean Startup: How Constant Innovation Creates Radically Successfull Business Paperback"
            image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScpS9dtMChvpksbeqyLbv_CJ0dZuOPK81mmpFhfAly1vEzYBSt"
            price={29.99}
            rating={4}
          />
          <Product
            id="1235678"
            title="Kennywood kMix Stand Mixer for Baking, Stylish Kitchen mixter with K-beater, Dough hook and Whisk, 5 Liter glass Bowl"
            image="https://cf.shopee.co.id/file/38490f3ccf9b78046672a92ca51742fb"
            price={189.9}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="12371278"
            title="Samsung Galaxy S20 FE 5G | Factory Unlocked Android Cell Phone | 128 GB | US Version Smartphone | Pro-Grade Camera, 30X Space Zoom, Night Mode | Cloud Navy"
            image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._AC_SX148_SY213_QL70_.jpg"
            price={458.89}
            rating={5}
          />
          <Product
            id="12372348"
            title="Garmin 010-01769-01 Vivoactive 3, GPS Smartwatch with Contactless Payments and Built-In Sports Apps, Black with Silver Hardware"
            image="https://m.media-amazon.com/images/I/51TSoZg041L._AC_UY218_.jpg"
            price={40.99}
            rating={4}
          />
          <Product
            id="12312323"
            title="Amazon Essentials Women's Water Shoe"
            image="https://images-na.ssl-images-amazon.com/images/I/71IvgZeLoyL._AC_UX695_.jpg"
            price={21.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12311678"
            title="T-fal Ultimate Hard Anodized Dishwasher Safe Nonstick Cookware Set, 12-Piece, Red"
            image="https://images-na.ssl-images-amazon.com/images/I/81hgPmLcc-L._AC_SY450_.jpg"
            price={119.98}
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
