export type Post = {
    subreddit: string;
    subreddit_name_prefixed: string;
    author: string;
    title: string;
    ups: number;
    url: string;
    permalink: string;
    selftext: string;
    num_comments: number;
    thumbnail?: string;
    created_utc: number;
    name: string;
    likes?: boolean;
    saved?: boolean;
    token?: string;
  };