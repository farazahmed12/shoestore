import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const shoes = {
    "air-jordan-3-valor-blue": {
      name: "VALOUR BLUE",
      img: "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    },
    "jordan-mars-270-london": {
      name: "JORDAN MARS 270 LONDON",
      img: "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    },
    "air-jordan-1-zoom-racer-blue": {
      name: "RACER BLUE",
      img: "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
    },
  };

  const { productID } = useParams();
  const product = shoes[productID];
  const { name, img } = product;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={img} className="card-img-top" alt={name} />
        </div>
        <div className="col-md-6">
          <h3>{name}</h3>
          <p>Price: $0.00</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
