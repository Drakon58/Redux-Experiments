//ACTIONS
export const ADD_ARTICLE = "redux-app1/js/modules/ADD_ARTICLE";

export const BEGIN_POST_DATA_LOAD = "redux-app1/js/modules/DATA_LOAD";
export const SUCCESS_POST_DATA_LOAD = "redux-app1/js/modules/SUCESS_DATA_LOAD";
export const ERROR_POST_DATA_LOAD = "redux-app1/js/modules/ERROR_DATA_LOAD";

//ACTION FUNCS
export const addArticle = (payload) => {
    return { type: ADD_ARTICLE, payload }
};

export const getPostData = () => {
    return { type: BEGIN_POST_DATA_LOAD }
}

export const getPostDataSucess = posts => {
    return { type: SUCCESS_POST_DATA_LOAD, payload: { posts } }
}

export const getPostDataError = error => {
    return { type: ERROR_POST_DATA_LOAD, payload: { error } }
}

//REDUCERS
var initialState = {
    articles: [],
    posts: [],
    loading: false,
    error: null
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            let newArticleList = state.articles.concat(action.payload);
            return {
                ...state,
                articles: newArticleList
            };
        case BEGIN_POST_DATA_LOAD:
            console.log(`Beginning data grab`)
            return {
                ...state,
                loading: true
            }
        case SUCCESS_POST_DATA_LOAD:
            console.log(`Data succesfully grabbed: ${action.payload.posts}`);
            return {
                ...state,
                loading: false,
                posts: action.payload.posts,
                error: null
            }
        case ERROR_POST_DATA_LOAD:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload.error
            }
        default:
            return state;

    }
}