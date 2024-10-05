import React from "react";
import DisplayItem from "@/components/DisplayItem/DisplayItem";
import Image from "@/components/Image";

const styles = {
  Screen: {
    backgroundColor: "#161616",
  },
};

const popularItems = [];
const scentsItems = [];
const materialsItems = [];
const typesItems = [];

const Home = () => {
    return (
      <div>
        <div>
          <h1>DIY Your Fragrance</h1>
          <div>
            Discover the art of fine fragrances with our exquisite collection.
          </div>
          <div style={{ backgroundImage: 'url(constants/images/Image9.png)', height: '120px', width: '300px' }} />
        </div>
        <div>
          <div>Popuplar</div>
          {popularItems.map((item) => {
            return (
              <div>
                <DisplayItem image={item.image} />
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div>Product Selection</div>
          <div>
            <div>Scents</div>
            {scentsItems.map((item) => {
              return (
                <div>
                  <DisplayItem image={item.image} />
                  <div>{item.title}</div>
                </div>
              );
            })}
            <div>Materials</div>
            {materialsItems.map((item) => {
              return (
                <div>
                  <DisplayItem image={item.image} />
                  <div>{item.title}</div>
                </div>
              );
            })}
            <div>Types</div>
            {typesItems.map((item) => {
              return (
                <div>
                  <DisplayItem image={item.image} />
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  
export default Home;