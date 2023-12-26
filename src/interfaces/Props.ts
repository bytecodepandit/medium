import { ReactNode } from "react";

export type Props = {
    children?: ReactNode;
    title?: string;
    backgroundColor?: string;
    subreddit?: string;
    permalink?: string;
    thumbnail?: string;
    token?: string;
  };
  