// frontend/src/components/ProductCardContainer.js
import React from "react";
import "./styles/productCardContainer.css";

const ProductCardContainer = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S205d377fe10c48d88f74d08408d2219fi/Xiaomi-MIJIA-G6-Drone-5G-GPS-Drone-8k-Profesional-HD-Camera-Obstacle-Avoidance-Aerial-Photography-Foldable.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 2,
      name: "Product 2",
      price: 24.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S356aa37e090a47e7b5af3e86def265ebT/New-Drone-8K-GPS-Drone-Professional-HD-5G-Aerial-Photography-Obstacle-Avoidance-Drone-Four-Rotor-Helicopter.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 3,
      name: "Product 3",
      price: 15.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S605a15961a0647979d39f529ac9d5f57C/New-Drone-109L-8K-GPS-RC-5000M-Four-Sided-Positioning-Obstacle-Avoidance-Quadcopter-Upgraded-Uav-Hd.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 4,
      name: "Product 4",
      price: 17.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S1e34985e4800477db39857f84d431a61L/RC-Stunt-Car-Children-Double-Sided-Flip-2-4G-Remote-Control-Car-360-Degree-Rotation-Off.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 5,
      name: "Product 5",
      price: 20.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S29be31d2bae84559bc7f7bf7088b9cf1e/2023-New-CS8-Mini-Drone-4K-Dual-Camera-HD-Professional-Obstacle-Avoidance-360-RC-Wide-Angle.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 6,
      name: "Product 6",
      price: 30.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S1303de13b185484db7c065930a8a2c2bz/1-12-1-16-4WD-RC-Car-2-4G-Radio-Control-Car-Buggy-Off-Road-Remote.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 7,
      name: "Product 7",
      price: 19.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S205d377fe10c48d88f74d08408d2219fi/Xiaomi-MIJIA-G6-Drone-5G-GPS-Drone-8k-Profesional-HD-Camera-Obstacle-Avoidance-Aerial-Photography-Foldable.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 8,
      name: "Product 8",
      price: 24.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S356aa37e090a47e7b5af3e86def265ebT/New-Drone-8K-GPS-Drone-Professional-HD-5G-Aerial-Photography-Obstacle-Avoidance-Drone-Four-Rotor-Helicopter.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 9,
      name: "Product 9",
      price: 15.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S605a15961a0647979d39f529ac9d5f57C/New-Drone-109L-8K-GPS-RC-5000M-Four-Sided-Positioning-Obstacle-Avoidance-Quadcopter-Upgraded-Uav-Hd.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 10,
      name: "Product 10",
      price: 17.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S1e34985e4800477db39857f84d431a61L/RC-Stunt-Car-Children-Double-Sided-Flip-2-4G-Remote-Control-Car-360-Degree-Rotation-Off.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 11,
      name: "Product 11",
      price: 20.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S29be31d2bae84559bc7f7bf7088b9cf1e/2023-New-CS8-Mini-Drone-4K-Dual-Camera-HD-Professional-Obstacle-Avoidance-360-RC-Wide-Angle.jpg_220x220xz.jpg_.webp",
    },
    {
      id: 12,
      name: "Product 12",
      price: 30.99,
      mensage:
        "Mini drone profissional produto de alta qualidade totalmente bom.",
      imageUrl:
        "https://ae01.alicdn.com/kf/S1303de13b185484db7c065930a8a2c2bz/1-12-1-16-4WD-RC-Car-2-4G-Radio-Control-Car-Buggy-Off-Road-Remote.jpg_220x220xz.jpg_.webp",
    },
    // Add more products here
  ];

  //const truncatedMessage = products.message.substring(0, 15);

  return (
    <div className="productscardcontaine">
      <h3 className="pcc">Itens</h3>
      <div className="product-card-container">
        {products.map((product) => (
          <div key={product.id} className="card-container">
            <a href={`/product/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} />
              <div className="text-product">
              <h3 className="product-card-name">{product.name}</h3>
              <p className="product-card-price">{`R$${product.price.toFixed(
                2
              )}`}</p>
              <p className="product-card-mensage">{product.mensage}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCardContainer;
