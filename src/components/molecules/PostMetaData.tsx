import { getTime } from "@/utils";


export const PostMetadata = ({
    className,
    created_utc,
    subreddit_name_prefixed,
  }: any) => (
    <div className={className}>
      <span>{getTime(created_utc)}</span>
      <span className="px-2">·</span>
      <a className="link-black-hover" href={`/${subreddit_name_prefixed}`}>
        {subreddit_name_prefixed}
      </a>
    </div>
  );