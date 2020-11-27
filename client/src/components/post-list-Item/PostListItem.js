import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost, setCurrentPost } from '../../redux/actions/posts';
import formatDate from '../../utils/formatDate'

const PostListItem = ({postId}) => {

    const [post, setPost] = React.useState(null)
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        fetchPost(postId).then(data => setPost(data))
        return () => setPost(null)
    }, [])


     
    return (
        <div>
            {post && <div className = 'post' onClick = {() => dispatch(setCurrentPost(postId))}>
                        <strong>{post.by}</strong> : <code>{post.title}</code>
                        <span>{formatDate(post.time)}</span>
                    </div>}
            <br/>
        </div>
    );
}

export default PostListItem;
