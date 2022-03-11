import React, { useState, useEffect } from "react";
import axios from "axios";
import Catalog from "./Catalog";
import Loading from "./Loading";
import Menu from "./Menu";
import Plate from "./Plate";
import Error from "./Error";
import "./VendingMachine.css";

import Api from "../../utils/Api";

export default function VendingMachine(props) {
  const { toast } = props;
  const [foodlist, setFoodlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorDetails, setErrorDetails] = useState();
  const [selectedFood, setSelectedFood] = useState({
    id: "",
    name: "",
    preparation_time: "",
    thumbnail: "",
  });
  const url = Api.url;

  useEffect(() => {
    axios
      .get(url + "products", { mode: "no-cors" })
      .then((res) => {
        const data = res.data.data;
        var c = 1;
        data.forEach((e) => {
          e.count = c;
          c++;
        });
        setFoodlist(data);
      })
      .catch((err) => {
        setLoading(false);
        setIsError(true);
        setErrorDetails(err);
      });
  }, [url]);

  useEffect(() => {
    if (foodlist.length > 0) {
      setLoading(false);
    }
  }, [foodlist]);

  return (
    <div className="main container">
      <div className="first-border container">
        <div className="second-border container row">
          <div className="welcome-container">
            <p className="h2">Welcome, please pick your food</p>
          </div>
          <div className="col-8 third-border">
            {loading ? (
              <Loading />
            ) : (
              <div>
                {isError ? (
                  <Error />
                ) : (
                  <Catalog
                    foodlist={foodlist}
                    setSelectedFood={setSelectedFood}
                  />
                )}
              </div>
            )}
          </div>
          <div className="col-4 third-border">
            <Menu
              selectedFood={selectedFood}
              setSelectedFood={setSelectedFood}
              toast={toast}
            />
          </div>
          <div>
            <Plate />
          </div>
        </div>
      </div>
    </div>
  );
}
