// frontend/src/components/ProductCarousel.js
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/productCarousel.css";

const ProductCarousel = () => {
  const productsCar = [
    {
      id: 1,
      imageUrl:
        "https://ae01.alicdn.com/kf/S78cc237687074fe7b405f1d36ab4b9302.png",
      name: "Product 1",
    }
  ];

  return (
    <div className="carousel-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {productsCar.map((product) => (
          <div key={product.id}>
            <a href={product.imageUrl} target="_blank" rel="noopener noreferrer">
              <img className="img" src={product.imageUrl} alt={product.name} />
            </a>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
