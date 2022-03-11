import React from "react";
import Catalog from "./Catalog";
import Menu from "./Menu";
import Plate from "./Plate";
import "./VendingMachine.css";

export default function VendingMachine() {
  return (
    <div className="main container">
      <div className="first-border container">
        <div className="second-border container row">
          <div className="welcome-container">
            <p className="h2">Welcome, please pick your food</p>
          </div>
          <div className="col-8 third-border">
            <Catalog />
          </div>
          <div className="col-4 third-border">
            <Menu />
          </div>
          <div>
            <Plate />
          </div>
        </div>
      </div>
    </div>
  );
}
