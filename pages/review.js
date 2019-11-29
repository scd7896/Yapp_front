import React from "react";
import Head from "next/head";
import "../css/container.scss";
import "../css/Jun/review.scss";
import Developing from "../componets/Kim/developing/template/index";
const review = () => {
  return (
    <>
      <Head>
        <title>Toys - 마이페이지</title>
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
      </Head>
      <div className="page_container">
        <Developing />
      </div>
    </>
  );
};

export default review;
