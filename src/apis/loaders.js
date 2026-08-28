export const blogs = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
        throw new Error("Could not fetch blogs data!");
    }

    return response;
}

export const blogDetail = async ( {params} ) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    if (!response.ok) {
        throw new Error("Could not fetch blogs data!");
    }

    return response;
}