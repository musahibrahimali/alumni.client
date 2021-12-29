import axios from 'axios';

// create a new post using the fetch api
export const createNewPost = (formData) => {
    const url = 'http://localhost:5000/troll/post';
    // make fetch request with axios
    return axios({
        method: 'post',
        url: url,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });
}

// comment of post 
export const commentOnPost = async (postId, comment, userId) => {
    const url = "http://localhost:5000/troll/comment";
    const data = {
        postId: postId,
        userId: userId,
        comment: comment
    }
    // create a comment with the fetch api using the data received
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}

// like post 
export const likePost = async (postId, userId) => {
    const url = "http://localhost:5000/troll/like";
    const data = {
        userId: userId,
        postId: postId
    }

    // like a post with the fetch api using the data received
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}

// share post
export const sharePost = async (postId, userId) => {
    const url = "http://localhost:5000/troll/share";
    const data = {
        userId: userId,
        postId: postId
    }

    // share a post with the fetch api using the data received
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
}

// delete post
export const deletePost = async (postId) => {
    const url = "http://localhost:5000/troll/delete";
    const data = {
        postId: postId
    }

    // delete a post with the fetch api using the data received
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
};
