const axios = require("axios");

const getUsers = async () => {
    try {
        const usersResponse = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = usersResponse.data;

        const userWithLongestName = users.reduce((longest, current) => {
            return current.name.length > longest.name.length
                ? current
                : longest;
        }, users[0]);

        console.log("User with the longest name:", userWithLongestName);

        const usersWithBizEmail = users.filter((user) =>
            user.email.endsWith(".biz")
        );

        console.log("Users with .biz email:", usersWithBizEmail);
    } catch (error) {
        console.error("Error:", error);
    }
};

const fetchAndTransformData = async () => {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            axios.get("https://jsonplaceholder.typicode.com/users"),
            axios.get("https://jsonplaceholder.typicode.com/posts"),
        ]);

        const users = usersResponse.data;
        const posts = postsResponse.data;

        const userData = users.map((user) => {
            const userPosts = posts.filter((post) => post.userId === user.id);
            return {
                userName: user.name,
                totalPosts: userPosts.length,
                topThreePostTitles: userPosts
                    .slice(0, 3)
                    .map((post) => post.title),
            };
        });

        console.log(userData);
    } catch (error) {
        console.error("Error:", error);
    }
};

async function fetchHomePage() {
    try {
        const [usersResponse, postsResponse, commentsResponse] =
            await Promise.all([
                axios.get("https://jsonplaceholder.typicode.com/users"),
                axios.get("https://jsonplaceholder.typicode.com/posts"),
                axios.get("https://jsonplaceholder.typicode.com/comments"),
            ]);

        const users = usersResponse.data;
        const posts = postsResponse.data;
        const comments = commentsResponse.data;

        const dashboardData = users.map((user) => {
            const userPosts = posts.filter((post) => post.userId === user.id).slice(-3);

            const postsWithComments = userPosts.map((post) => {
                const postComments = comments.filter((comment) => comment.postId === post.id).map(comment => comment.body).slice(0, 2);
                return { title: post.title, comments: postComments };
            });

            return { name: user.username, posts: postsWithComments };
        });

        console.log(JSON.stringify(dashboardData));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Task 1
getUsers();
// Task 2
fetchAndTransformData();
// Task 3
fetchHomePage()
