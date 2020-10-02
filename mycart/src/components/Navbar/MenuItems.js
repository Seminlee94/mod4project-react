// import React from "react";
import navFridge from "./navFridge";
import navFriends from "./navFriends";
import navHome from "./navHome";
import navLogin from "./navLogin";
import navRecipe from "./navRecipe";
import navShop from "./navShop";
import navSignup from "./navSignup";

export const MenuItems = [
  {
    title: navHome,
    url: "/",
    cName: "nav-links",
  },
  {
    title: navShop,
    url: "/shop",
    cName: "nav-links",
  },
  {
    title: navFridge,
    url: "/fridge",
    cName: "nav-links",
  },
  {
    title: navRecipe,
    url: "/recipes",
    cName: "nav-links",
  },
  {
    title: navSignup,
    url: "/signup",
    cName: "nav-links",
  },
  {
    title: navLogin,
    url: "/login",
    cName: "nav-links",
  },
  {
    title: navFriends,
    url: "/friends",
    cName: "nav-links",
  },
];
