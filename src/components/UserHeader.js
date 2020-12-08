import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "semantic-ui-react";
import { fetchUser } from "../actions";

const UserHeader = ({ userId }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id === userId);

  useEffect(() => {
    dispatch(fetchUser(userId));
  });

  return <>{user ? <Header>{user.name}</Header> : null}</>;
};

export default UserHeader;
