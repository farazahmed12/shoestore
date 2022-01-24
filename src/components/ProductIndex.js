import React from "react";
import { Link } from "react-router-dom";

const ProductIndex = () => {
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
  return (
    <div className="row">
      {Object.entries(shoes).map(([productID, { name, img }], ind) => (
        <div key={ind} className="card mx-2" style={{ width: "18rem" }}>
          <Link to={productID}>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductIndex;
