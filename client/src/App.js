import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/style.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import DishForm from "./components/OrderForm";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { CAKES_DATA } from "./data";
import CookieNotice from "./components/CookieNotice";
import Register from "./auth/Register";
import Login from "./auth/Login";
import PrivateRoute from "./components/PrivateRoute";




function App() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  const [items, setItems] = useState(getArrayToLoadDataFrom());

  // if there is any data in local storage, we load it from it, otherwise the original data is loaded
  function getArrayToLoadDataFrom() {
    const localData = localStorage.getItem("items");
    if (localData) {
      return JSON.parse(localData);
    }
  }

  // update local storage every time the data is changed
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // useEffect(() => {
  //   calculateTotal();
  //   calculateTotalPrice();
  // })

  // function calculateTotal() {
  //   const cartItemsCount = items.reduce((previousValue, item) => {
  //     return previousValue + item.quantity;
  //   }, 0);

  //   setCartItemsCount(cartItemsCount);
  // }

  // function defineDessertOfTheDay(dayName) {
  //   let dessertId = "";

  //   switch(dayName) {
  //     case "Monday":
  //       dessertId = "pastry1";
  //       break;
  //     case "Tuesday":
  //       dessertId = "pastry3";
  //       break;
  //     case "Wednesday":
  //       dessertId = "cake6";
  //       break;
  //     case "Thursday":
  //       dessertId = "cake3";
  //       break;
  //     case "Friday":
  //       dessertId = "cake7";
  //       break;
  //     case "Saturday":
  //       dessertId = "pastry2";
  //       break;
  //     case "Sunday":
  //       dessertId = "cake8";
  //       break;
  //     default:
  //       dessertId = "cake6";
  //   }

  //   return dessertId;
  // }

  // const dessertOfTheDayId = defineDessertOfTheDay(getDayName());

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header isMenuOpened={isMenuOpened} setMenuOpened={setMenuOpened} />
      <Routes>
        <Route
          path="/"
          element={
            <Home cakes={CAKES_DATA} items={items} setItems={setItems} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Order" element={
          <PrivateRoute>
            <DishForm />
          </PrivateRoute>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login"
          element={
            <Login />
          } />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<Profile />} /> */}
      </Routes>
      <CookieNotice />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
