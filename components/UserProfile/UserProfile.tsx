import React from "react";
import DisplayItem from "@/components/DisplayItem/DisplayItem";

const UserProfile = ({ profileLink, userName, orders }) => {
  return (
    <div>
      <DisplayItem image={profileLink} />
      <div>{userName}</div>
      <div>
        <div>Orders</div>
        {orders.map((item) => {
          return (
            <div>
              <DisplayItem image={item.imageLink} />
              <div>
                <div>{item.title}</div>
                <div>Purchase on: {item.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserProfile;
