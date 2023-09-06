import React from "react";

const Restaurant = () => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img
          className="card-img-top mx-auto"
          src="https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"
          alt="Dominos"
        ></img>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Domino's Pizza</h5>
          <p className="rest_address">
            Ground Floor, MG Road Metro Station Reach,1, Church St, Bengaluru,
            Karnataks 560001
          </p>
          <div className="ratings mt-auto">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
            <i className="fa fa-star-o"></i>
            <span id="no_of_Reviews">(35 Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
