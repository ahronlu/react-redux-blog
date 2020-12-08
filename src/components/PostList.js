import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Item, List } from "semantic-ui-react";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

const PostList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsAndUsers());
  }, [dispatch]);

  return (
    <List relaxed divided>
      {posts.map((post) => (
        <Item key={post.id}>
          <Icon name="user" size="large" className="middle aligned" />
          <Item.Content>
            <Item.Description>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Item.Description>
            <UserHeader userId={post.userId} />
          </Item.Content>
        </Item>
      ))}
    </List>
  );
};

export default PostList;
