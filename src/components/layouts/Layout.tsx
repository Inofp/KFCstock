import React, { FC, PropsWithChildren } from "react";
import Header from "./Header";
import { IMeta } from "../SEO/meta.interface";
import Meta from "../SEO/Meta";
import Footer from "./Footer";
import CartContextProvider from "../contexts/CartContext";
import Loader from "./Loader";

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <CartContextProvider>
      <Meta title={title} description={description}>
        <Header />
        <Loader /> 
        {children}
        <Footer />
      </Meta>
    </CartContextProvider>
  );
};

export default Layout;
