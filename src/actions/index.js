import axios from "../apis/jsonPlaceholder";
import _ from "lodash";

import { FETCH_POSTS, FETCH_USER } from "./types";

export const fetchPosts = () => async (dispatch) => {
  const { data } = await axios.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: data });
};

export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const { data } = await axios.get(`/users/${id}`);
  dispatch({ type: FETCH_USER, payload: data });
});
