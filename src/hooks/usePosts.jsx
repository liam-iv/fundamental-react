import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log()
        if (sort) {
            console.log(sort)
            return [...posts].sort((a, b) => a[sort]?.localeCompare(b[sort]))
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (post, sort, query) => {
    const sortedPosts = useSortedPosts(post, sort);
    const sortAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts]);

    return sortAndSearchPosts;
}