import React from "react";

export default function Catalog(props) {
  const { foodlist, setSelectedFood } = props;

  const onClick = (food) => {
    setSelectedFood(food);
  };

  return (
    <div>
      <div className="row">
        {foodlist.map((e) => {
          return (
            <div
              className="col-12 col-sm-6 col-md-4"
              key={e.id}
              onClick={() => {
                onClick(e);
              }}
            >
              <div className="food-container">
                <img className="menu-image" src={e.thumbnail} alt={e.name} />
                <p>
                  <small className="id-display">{e.id}</small>
                </p>
                <p>
                  <b>{e.name}</b>
                  <br />
                  time to prepare: {e.preparation_time + " "}s
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
