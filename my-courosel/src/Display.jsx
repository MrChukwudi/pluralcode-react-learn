import "./display.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Product from "./Product.jsx";
import { productData, responsive } from "./Data.js";

const Display = () => {
  const product = productData.map((item) => {
    return (
      <Product
        key={item.id}
        url={item.imageurl}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <div className="App">
      <h1>React Multi Carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
};

export default Display;
