import {FILTER_BY_AUTHOR, FILTER_BY_CATEGORY, FILTER_BY_SEARCH } from "./actionTypes";
import initialState from "./initialState";


const reducer = (state=initialState, action) =>{
    switch (action.type) {
        case FILTER_BY_AUTHOR:
            let filterByAuthor = state.blogPost.filter(item=>item.author === action.payload)
            if(filterByAuthor){
                return {
                    ...state,
                    blogPost:filterByAuthor
                }
            }
            return state;
        case FILTER_BY_CATEGORY:
            let filterByCategory = state.blogPost.filter(item=>item.type === action.payload)
            if(filterByCategory){
                return {
                    ...state,
                    blogPost:filterByCategory
                }
            }
            return state;
        case FILTER_BY_SEARCH:
            if (action.payload !== '') {
                let filteredArray = state.blogPost.filter((item) => {
                    return item.title.toLowerCase().includes(action.payload) !== false && item;
                });
                return { ...state, blogPost: filteredArray };
            } 

            return state;      
        
        default:
            return state
    }
}

export default reducer