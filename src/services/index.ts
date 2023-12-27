import { Post, QueryParams } from "@/interfaces";

export async function getPopularPosts({
    subreddit = "popular",
    sort_type = "hot",
    t = "day",
    limit = 25,
    after = "",
    token = ""
  }: QueryParams) {
    const url =
      token != ""
        ? `https://oauth.reddit.com/r/${subreddit}/${sort_type}?limit=${limit}&after=${after}&t=${t}`
        : `https://www.reddit.com/r/${subreddit}/${sort_type}.json?limit=${limit}&after=${after}&t=${t}`;
    const headerOptions =
      token != ""
        ? {
            headers: { Authorization: `Bearer ${token}` }
          }
        : {};
    const res = await (await fetch(url, headerOptions)).json();
    console.log('res', res);
    const postList = await res.data.children;
    const posts: Post[] = postList.map((post: any) => post.data);
    return {
      posts: posts,
      after: res.data.after
    };
  }

  export async function getProfile({ token }: any) {
    const headerOptions = {
      headers: { Authorization: `Bearer ${token}` }
    };
    return await (
      await fetch(`https://oauth.reddit.com/api/v1/me`, headerOptions)
    ).json();
  }


export async function getPopularPostsClient(params: QueryParams) {
    const headerOptions = {
      method: "POST",
      body: JSON.stringify(params)
    };
    const res = await (await fetch("/api/posts", headerOptions)).json();
    const postList = await res.data.children;
    const posts: Post[] = postList.map((post: any) => post.data);
    return {
      posts: posts,
      after: res.data.after
    };
  }