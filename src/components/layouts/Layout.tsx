import { FC, PropsWithChildren } from "react";
import Header from "./Header";
import { IMeta } from "../SEO/meta.interface";
import Meta from "../SEO/Meta";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Header />
      {children}
      <Footer/>
    </Meta>
    
  );
};

export default Layout;
