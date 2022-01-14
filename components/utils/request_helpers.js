import axios from 'axios';

// get all blogs
export const getBlogs = async () => {
    const url = 'http://localhost:5000/blog/get-blogs';
    // make fetch request with axios
    return axios({
        url: url,
        method: "GET",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

// get all news
export const getNews = async () => {
    const url = 'http://localhost:5000/news/get-all-news';
    // make fetch request with axios
    return axios({
        url: url,
        method: "GET",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

// get all events
export const getEvents = async () => {
    const url = 'http://localhost:5000/event/get-events';
    // make fetch request with axios
    return axios({
        url: url,
        method: "GET",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

// get all jobs
export const getJobs = async () => {
    const url = 'http://localhost:5000/job/get-jobs';
    // make fetch request with axios
    return axios({
        url: url,
        method: "GET",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
}

// create a new post using the fetch api
export const createNewPost = (formData) => {
    const url = 'http://localhost:5000/troll/create-troll';
    // make fetch request with axios
    return axios({
        url: url,
        method: "POST",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: formData,
    });
}

// comment of post 
export const commentOnPost = async (postId, comment, userId) => {
    const url = `http://localhost:5000/troll/add-comment/${postId}`;
    const data = {
        troll: postId,
        user: userId,
        comment: comment,
    }
    // create a comment with the fetch api using the data received
    return await axios({
        url: url,
        method: "PATCH",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

// delete comment on post
export const deleteComment = async (postId, commentId) => {
    const url = `http://localhost:5000/troll/delete-comment/${postId}`;
    const data = {
        trollId: commentId,
    }
    // create a comment with the fetch api using the data received
    return await axios({
        url: url,
        method: "DELETE",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

// like post 
export const likePost = async (postId, userId) => {
    const url = `http://localhost:5000/troll/like-troll/${postId}`;
    const data = {
        user: userId,
        troll: postId
    }

    // like a post with the fetch api using the data received
    return await axios({
        url: url,
        method: "PATCH",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

// like post 
export const unlikePost = async (postId, userId) => {
    const url = `http://localhost:5000/troll/delete-like/${postId}`;
    const data = {
        userId: userId,
        postId: postId
    }

    // like a post with the fetch api using the data received
    return await axios({
        url: url,
        method: "DELETE",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

// share post
export const sharePost = async (postId, userId) => {
    const url = `http://localhost:5000/troll/share-troll/${postId}`;
    const data = {
        userId: userId,
        postId: postId
    }

    // share a post with the fetch api using the data received
    return await axios({
        url: url,
        method: "POST",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        data: JSON.stringify(data),
    });
}

// delete post
export const deletePost = async (postId) => {
    const url = `http://localhost:5000/troll/delete-troll/${postId}`;

    // delete a post with the fetch api using the data received
    return await axios({
        url: url,
        method: "DELETE",
        withCredentials: true,
        headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
    });
};
