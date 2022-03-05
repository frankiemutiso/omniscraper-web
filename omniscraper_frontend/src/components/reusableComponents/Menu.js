import React from "react";
import "./Menu.css";

function Menu(props) {
  const { menuItems, open, top, left, ...restProps } = props;

  return (
    <div className="menu" {...restProps}>
      <div
        style={
          open
            ? {
                backgroundColor: "#fff",
                minWidth: "100px",
                boxShadow:
                  "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                zIndex: 1,
                top: top,
                left: left,
                display: "block",
              }
            : {
                display: "none",
              }
        }
      >
        {menuItems.map((x, i) => (
          <div
            key={i}
            onClick={() => x.clickHandler()}
            className="menu__content__item"
          >
            {x.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
