import {  FILTER_BY_AUTHOR, FILTER_BY_CATEGORY, FILTER_BY_SEARCH } from "./actionTypes"

export const authorFilter = (name) =>{
    return {
        type: FILTER_BY_AUTHOR,
        payload: name
        
    }
}
export const categoryFilter = (category) =>{
    return {
        type: FILTER_BY_CATEGORY,
        payload: category
        
    }
}
export const searchFilter = (searchText) =>{
    return {
        type: FILTER_BY_SEARCH,
        payload: searchText
        
    }
}