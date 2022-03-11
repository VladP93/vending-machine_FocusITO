import React from "react";

export default function Menu() {
  return (
    <div>
      <div className="menu-container">
        <p className="text-light h4">Menu</p>
        <p className="text-light h5">Selected food</p>
        <img
          className="selected-image"
          src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
          alt="asd"
        />
        <p>Name</p>
        <p>Time to prepare: xxx</p>
        <input type="submit" value="Request" className="btn btn-success" />
      </div>
      <hr />
      <div>
        <p className="h5 text-light">Latest orders</p>
        <br />
        <div className="third-border latest-order-container row">
          <div className="col">
            <img
              className="latest-order-image"
              src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
              alt="asd"
            />
          </div>
          <div className="col">
            <p>ID</p>
            <p className="text-light">Name</p>
          </div>
        </div>
        <div className="third-border latest-order-container row">
          <div className="col">
            <img
              className="latest-order-image"
              src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
              alt="asd"
            />
          </div>
          <div className="col">
            <p>ID</p>
            <p className="text-light">Name</p>
          </div>
        </div>
        <div className="third-border latest-order-container row">
          <div className="col">
            <img
              className="latest-order-image"
              src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
              alt="asd"
            />
          </div>
          <div className="col">
            <p>ID</p>
            <p className="text-light">Name</p>
          </div>
        </div>
        <div className="third-border latest-order-container row">
          <div className="col">
            <img
              className="latest-order-image"
              src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
              alt="asd"
            />
          </div>
          <div className="col">
            <p>ID</p>
            <p className="text-light">Name</p>
          </div>
        </div>
        <div className="third-border latest-order-container row">
          <div className="col">
            <img
              className="latest-order-image"
              src="https://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/master/pass/the-ultimate-hamburger.jpg"
              alt="asd"
            />
          </div>
          <div className="col">
            <p>ID</p>
            <p className="text-light">Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
