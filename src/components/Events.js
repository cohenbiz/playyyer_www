import React from "react";
import { Link } from "react-router-dom";
/*
import  from "../images/";
import  from "../images/";
import  from "../images/";
import  from "../images/";
*/
const Events = () => {
  return (
    <section className="event">
      <div>
        <div className="col">
        <Link to="/eventspages/event1">
          <div className="card">
            {/*<img src={} className="card-img-top p-2" alt="..." />*/}
            <div className="card-body">
              <h5 className="card-title">Evénement 1</h5>
              <p className="card-text">Description</p>
            </div>
          </div>
          </Link>
        </div>

        <div className="col">
          <div className="card">
            {/*<img src={} className="card-img-top p-2" alt="..." />*/}
            <div className="card-body">
              <h5 className="card-title">Evénement 2</h5>
              <p className="card-text">Description</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
             {/*<img src={} className="card-img-top p-2" alt="..." />*/}
            <div className="card-body">
              <h5 className="card-title">Evénement 3</h5>
              <p className="card-text">Description</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
              {/*<img src={} className="card-img-top p-2" alt="..." />*/}
            <div className="card-body">
              <h5 className="card-title">Evénement 4</h5>
              <p className="card-text">Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
