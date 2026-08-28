export const blogs = async () => {
    const [postsResponse, usersResponse] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/users")
    ]);

    if (!postsResponse.ok || !usersResponse.ok) {
        throw new Error("Could not fetch blog data!");
    }

    const posts = await postsResponse.json();
    const users = await usersResponse.json();

    return { posts, users };
}

export const blogDetail = async ( {params} ) => {
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

    if (!postResponse.ok) {
        throw new Error("Could not fetch posts data!");
    }

    const post = await postResponse.json();

    const usersResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)

    if (!usersResponse.ok) {
        throw new Error("Could not fetch users data!");
    }

    const user = await usersResponse.json();

    return {post, user}
}