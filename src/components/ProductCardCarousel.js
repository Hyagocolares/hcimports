// frontend/src/components/ProductCardCarousel.js
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import debounce from "lodash.debounce";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/productCardCarousel.css";

const ProductCardCarousel = ({ title }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(2);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para obter os produtos do backend
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://backendhc.hyagocolares.repl.co/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    // Chamada da função para obter os produtos ao montar o componente
    getProducts();
  }, []); // Use o segundo argumento do useEffect para garantir que a função seja chamada apenas uma vez

  useEffect(() => {
    const calculateSlidesToShow = () => {
      // Obtenha a largura da janela do navegador
      const windowWidth = window.innerWidth;
      // Calcule quantos slides cabem na largura atual da tela
      let slidesToFit;
      if (windowWidth <= 480) {
        slidesToFit = Math.floor(windowWidth / 180); // Ajuste para a largura do product-card em telas menores
      } else {
        slidesToFit = Math.floor(windowWidth / 220); // Ajuste para a largura do product-card em telas normais
      }

      // Atualize o estado com o novo valor de slidesToShow
      setSlidesToShow(slidesToFit);
    };

    // Usamos o debounce na chamada da função calculateSlidesToShow
    const debouncedCalculateSlidesToShow = debounce(calculateSlidesToShow, 200);

    // Adicione um event listener para o redimensionamento da janela
    window.addEventListener("resize", debouncedCalculateSlidesToShow);

    // Calcula o número inicial de slidesToShow no carregamento da página
    calculateSlidesToShow();

    // Remova o event listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", calculateSlidesToShow);
    };
  }, []);

  useEffect(() => {
    const calculateSlidesToScroll = () => {
      const windowWidth = window.innerWidth;
      const slidesToShowFit = Math.floor(
        windowWidth <= 480 ? windowWidth / 180 : windowWidth / 220
      );

      // Definir o valor de slidesToScroll com base em slidesToShowFit
      // Para telas menores, definimos slidesToScroll como slidesToShowFit (para exibir todos os cards visíveis)
      // Para telas maiores, definimos slidesToScroll como 1 (rolagem de 1 slide por vez)
      setSlidesToScroll(windowWidth <= 480 ? slidesToShowFit : 2);
    };

    const debouncedCalculateSlidesToScroll = debounce(
      calculateSlidesToScroll,
      200
    );

    window.addEventListener("resize", debouncedCalculateSlidesToScroll);
    calculateSlidesToScroll();

    return () => {
      window.removeEventListener("resize", calculateSlidesToScroll);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    //centerMode: true, // Adiciona a propriedade centerMode para centralizar o slide ativo
  };

  return (
    <div className="product-card-carousel">
      {title && <h3 className="pcc">{title}</h3>}
      <div className="card-carousel-container">
        <Slider {...settings}>
          {products.map((product) => (
            <div className="card-product" key={product.id}>
              <a href={`/product/${product.id}`}>
                <div className="product-card">
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{`R$ ${product.price.toFixed(2)}`}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductCardCarousel;
