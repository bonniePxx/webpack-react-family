import {initialState} from './initState';

function PreviewList(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_POSTS": {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case "RECEIVE_POSTS": {
      return {
        ...state,
        loading: false,
        error: false,
        articlelist: action.posts
      };
    }
    case "LOAD_ARTICLES_ERROR": {
      return {
        ...state,
        loading: false,
        error: true
      };
    }

    default:
      return state;
  }
}

export default PreviewList