

//ACTIONS
export const ADD_ARTICLE = "redux-app1/js/modules/ADD_ARTICLE";

//ACTION FUNCS
export const addArticle = (payload) => {
    return {type: ADD_ARTICLE, payload}
};


//REDUCERS
var initialState = {
    articles: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_ARTICLE:
            let newArticleList = state.articles.concat(action.payload);
            return {
                ...state,
                articles: newArticleList
            };
        default:
            return state;
    }
}