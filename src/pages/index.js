// pages/index.js (или любая другая страница)

import React from "react";
import Layout from "../components/Layout";
import HomePage from "./Home";
import CatalogPage from "./catalog";

const Home = () => {
  return (
    <>
      <Layout>
        <HomePage />
      </Layout>
     
    </>
  );
};

export default Home;
