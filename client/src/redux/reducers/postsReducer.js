const initialState = {
    postsIds: [],
    loading: false,
    currentPost: null
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_POSTS_IDS':
            return{
                ...state,
                postsIds: action.payload
            }
        case 'SHOW_LOADER': 
            return {
                ...state,
                loading: true
            }    
        case 'HIDE_LOADER': 
            return {
                ...state,
                loading: false
            }  
        case 'SET_CURRENT_POST': 
            return {
                ...state,
                currentPost: action.payload
            }
        default:
            return state
    }
}

export default postsReducer