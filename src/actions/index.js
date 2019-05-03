import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";
export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

//Non memorize version need more step.
export const fetchUser = id => {
  return async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  };
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  //   console.log(getState().posts);
  const uniqueId = _.uniq(_.map(getState().posts, "userId"));
  uniqueId.forEach(id => dispatch(fetchUser(id))); // No await cuz we don't care how long.
  //forEach can't use with async await as well. So we need to use sth else if we want to wait
};

// Memorize version

// export const fetchUser = id => {
//   return dispatch => {
//     _fetchUser(id, dispatch);
//   };
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
