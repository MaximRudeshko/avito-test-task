import axios from 'axios'
import HackerNewsApi from '../../services/hackerNewsApi'
const hwApi = new HackerNewsApi()

export const setPosts = posts => {
    return{
        type: 'SET_POSTS_IDS',
        payload: posts
    }
}

export const hideLoader = () => {
    return {
        type: 'HIDE_LOADER'
    }
}

export const showLoader = () => {
    return {
        type: 'SHOW_LOADER'
    }
}

export const setCurrentPost = postId => {
    return {
        type: 'SET_CURRENT_POST',
        payload: postId
    }
}

export const fetchPostsIds = () => async dispatch => {
    try {
        hwApi.getPostsIds().then(data => dispatch(setPosts(data)))
    } catch (error) {
        console.log(error)
       
    }
}

export const fetchPost = async postId => {
    try {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`)
        return await response.data
    } catch (error) {
        console.log(error)
    }
}