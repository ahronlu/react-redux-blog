import React from "react";
import { useSelector } from "react-redux";
import { Header } from "semantic-ui-react";

const UserHeader = ({ userId }) => {
  const users = useSelector((state) => state.users);

  const user = users.find((user) => user.id === userId);

  return <>{user ? <Header>{user.name}</Header> : null}</>;
};

export default UserHeader;
