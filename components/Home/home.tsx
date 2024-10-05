import React from "react";
import DisplayItem from "@/components/DisplayItem/DisplayItem";
import Selections from "@/components/Home/Selections";
import Header from "@/components/Home/Header";

import { POPULAR_PRODUCTS, PRODUCT_SELECTIONS } from "@/data/mock_home_data";

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ overflow: 'scroll' }}>
        <div>
          <h1>DIY Your Fragrance</h1>
          <div>
            Discover the art of fine fragrances with our exquisite collection.
          </div>
          <div
            style={{
              backgroundImage: "url(constants/images/Image9.png)",
              height: "120px",
              width: "300px",
            }}
          />
        </div>
        <div>
          <h2>Explore Our Fragrances</h2>
          <div style={{ display: "flex" }}>
            {POPULAR_PRODUCTS.map((item) => {
              return <DisplayItem {...item} />;
            })}
          </div>
        </div>
        <div>
          <h2>Product Selection</h2>
          <div>
            <Selections title="Scents" items={PRODUCT_SELECTIONS.scents} />
            <Selections
              title="Materials"
              items={PRODUCT_SELECTIONS.materials}
            />
            <Selections title="Types" items={PRODUCT_SELECTIONS.types} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
