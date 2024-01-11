import React from "react";
import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div
        style={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            padding: 5,
            width: "auto",
            display: "flex",
            minHeight: 50,
            backgroundColor: "lightpink",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              minHeight: 50,
              backgroundColor: "lightblue",
              borderRadius: 8,
              padding: 5,
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                width: "33%",
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                backgroundColor: "lightgreen",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Link to="/">Ayan</Link>
            </div>
            <div
              style={{
                width: "33%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                backgroundColor: "lightgoldenrodyellow",
                padding: 5,
                alignItems: "center",
              }}
            >
              /---- Barre de recherche -----/
            </div>
            <div
              style={{
                width: "33%",
                display: "flex",
                justifyContent: "flex-end",
                flexDirection: "row",
                backgroundColor: "lightsalmon",
                alignItems: "center",
                padding: 5,
              }}
            >
              <Link to="/account">Mon compte</Link>
              <Link to="/orders">Mes commandes</Link>
              <Link to="/cart">Panier</Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
