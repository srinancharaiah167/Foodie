import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FaDollarSign, FaListUl, FaStar, FaShoppingCart } from "react-icons/fa";
import { StoreContext } from "../context/StoreContext";
import "./FoodDetail.css";

const FoodDetail = () => {
  const { addToCart, food_list } = useContext(StoreContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const foodItem = food_list.find(item => item._id === id); 

  if (!foodItem) {
    return <div className="food-detail">No food item found.</div>;
  }

  // Function to render tag text & emoji
  const renderFoodTag = (type) => {
    if (type === "veg") return <span className="tag veg">🟢 Veg</span>;
    if (type === "non-veg") return <span className="tag non-veg">🔴 Non-Veg</span>;
    if (type === "vegan") return <span className="tag vegan">🌱 Vegan</span>;
    return null;
  };

  return (
    <div className="food-detail-wrapper">
      <div className="food-detail-container">
        <div className="food-detail-image">
          <img src={foodItem.image} alt={foodItem.name} />
        </div>

        <div className="food-detail-info">
          <h1>
            {foodItem.name} {renderFoodTag(foodItem.foodType)}
          </h1>
          <p className="description">{foodItem.description}</p>

          <div className="info-section">
            <div className="price">
              <FaDollarSign /> {foodItem.price}
            </div>
            <div className="category">
              <FaListUl /> {foodItem.category}
            </div>
            <div className="rating">
              <FaStar className="star-icon" /> 4.5 (120+ reviews)
            </div>
          </div>

          <button className="add-to-cart" onClick={() => addToCart(id)}>
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
