import React from "react";
import { Footer, Header } from "../Components/Layout";
import { Home, MenuItemDetails, NotFound } from "../Pages";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../Apis/shoppingCartApi";
import { setShoppingCart } from "../Storage/Redux/shoppingCartSlice";
// prettier-ignore
function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery(
    "1daf32f8-e593-4703-9b19-683b59e3ed6f"
  );

 

  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/menuItemDetails/:menuItemId" element={<MenuItemDetails />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
