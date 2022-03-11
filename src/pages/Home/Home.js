import React from "react";
import VendingMachine from "../../components/VendingMachine";
import "./Home.css";

export default function Home(props) {
  const { toast } = props;
  return (
    <div>
      <div className="h1 text-light header">Vending Machine</div>
      <div className="container">
        <VendingMachine toast={toast} />
      </div>
    </div>
  );
}
