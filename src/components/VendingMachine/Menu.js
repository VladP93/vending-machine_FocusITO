import React, { useState, useEffect } from "react";
import noFood from "../../assets/empty.png";

export default function Menu(props) {
  const { selectedFood, toast } = props;
  const [orders, setOrders] = useState([]);
  const [timmer, setTimmer] = useState(0);

  const onSubmit = () => {
    if (selectedFood.id == "") {
      toast.error("please select an item");
    } else {
      toast.info(
        "Preparing " +
          selectedFood.name +
          ". It will be ready in " +
          selectedFood.preparation_time +
          "s",
        {
          autoClose: selectedFood.preparation_time * 1000,
        }
      );
      addOrder(
        selectedFood.id + Date.now() / 1000,
        selectedFood.name,
        selectedFood.preparation_time,
        selectedFood.thumbnail
      );
      onSuccess(selectedFood.name, selectedFood.preparation_time * 1000);
    }
  };

  const onSuccess = (name, time) => {
    setTimeout(() => {
      toast.success(name + " has been prepared.", { autoClose: 1000 });
    }, time);
  };

  function addOrder(id, name, time, img) {
    var newElement = { id, name, time, img };
    setOrders([...orders, newElement]);
  }

  useEffect(() => {
    setTimeout(() => {
      orders.forEach((o) => {
        if (o.time > 0) {
          o.time = o.time - 1;
        }
      });
      setTimmer(timmer + 1);
    }, 1000);
    setOrders([...orders]);
  }, [timmer]);

  return (
    <div>
      <div className="menu-container">
        <p className="text-light h4">Menu</p>
        <p className="text-light h5">Selected food</p>
        <img
          className="selected-image"
          src={selectedFood.thumbnail === "" ? noFood : selectedFood.thumbnail}
          alt={selectedFood.name}
        />
        <p className="h5">
          {selectedFood.name === "" ? "No selected item" : selectedFood.name}
        </p>
        <p>
          Time to prepare:{" "}
          {selectedFood.preparation_time == 0
            ? "..."
            : selectedFood.preparation_time}{" "}
          s
        </p>
        <input
          type="button"
          value="Request"
          className="btn btn-success"
          onClick={() => onSubmit()}
        />
      </div>
      <hr className="separator" />
      <div>
        <p className="h5 text-light">Latest orders</p>
        <br />
        <div className="orders-hist">
          {orders
            .slice(0)
            .reverse()
            .map((o) => {
              return (
                <div
                  className="third-border latest-order-container row"
                  key={o.id}
                >
                  <div className="col">
                    <img
                      className="latest-order-image"
                      src={o.img}
                      alt={o.name}
                    />
                  </div>
                  <div className="col">
                    <p className="text-light">
                      Status: {o.time == 0 ? "Delivered" : o.time + "s"}
                    </p>
                    <p className="text-light">{o.name}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
