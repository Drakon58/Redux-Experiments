import {getPostData, getPostDataSucess, getPostDataError} from '../modules/index'
const baseURL = "https://jsonplaceholder.typicode.com";

export const getPosts = () => {
  console.log("Grabbing data");
    return dispatch => {
        dispatch(getPostData());
        console.log(`Fetching data now from ${baseURL}/posts`);
        return fetch(`${baseURL}/posts`)
        .then(handleErrors)
        .then(response => response.json())
        .then(json => dispatch(getPostDataSucess(json)))
        .catch(error => dispatch(getPostDataError(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }