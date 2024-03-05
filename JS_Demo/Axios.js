const axios = require("axios");

async function fetchPosts() {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response.data);
    } catch (error) {
        if (error.response) {
            console.error(handleStatusCode(error.response.status));
        } else if (error.request) {
            alert("No response from server.");
        } else {
            alert("Request error.");
        }
    }
}

function handleStatusCode(statusCode) {
    switch (statusCode) {
        case 400:
            return "Bad Request.";
        case 401:
            return "Unauthorized.";
        case 403:
            return "Forbidden.";
        case 404:
            return "Not Found.";
        case 500:
            return "Internal Server Error.";
        case 503:
            return "Service Unavailable.";
        default:
            return `Error: ${statusCode}`;
    }
}

fetchPosts();
