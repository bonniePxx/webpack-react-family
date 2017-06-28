//fetch数据

export const fetchPosts = (url) => dispatch => {
  dispatch({type: "REQUEST_POSTS"});
  return (
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
      .catch(err => console.log(err))
  );
};

export const receivePosts = (json) => ({
  type: "RECEIVE_POSTS",
  posts: json["lists"]
});
