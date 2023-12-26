import React, { useState } from 'react';
import ProfileOptions from './ProfileOptions';

export const NavMenu = ({ token = "" }: any) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const newSearch = () => (window.location.href = `/search/?q=${searchTerm}`);
  return (
    <div className="items-center flex flex-row h-full justify-end">
      <div className="flex flex-row items-center justify-end h-full">
        <img
          className="cursor-pointer p-1 mr-2 ml-3 sub-opacity-68 link-black-hover"
          src="/search.svg"
          onClick={() => setShowSearch(!showSearch)}
        />
        {showSearch ? (
          <input
            className="search-bar main-black text-base sm:w-3/12"
            placeholder="Search Reddit"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && newSearch()}
          />
        ) : (
          ""
        )}
        <a
          href="https://ko-fi.com/eightants"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-8 cursor-pointer p-1 ml-2 sub-opacity-68 link-black-hover"
            src="/coffee.svg"
          />
        </a>
        <a
          href="https://github.com/eightants/reddium/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-10 cursor-pointer p-1 ml-2 sub-opacity-68 link-black-hover hidden md:block"
            src="/github.svg"
          />
        </a>
      </div>
      <a
        href="https://github.com/eightants/reddium/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="md:hidden my-4 ml-4 p-1 px-3 sub-opacity-68 link-black-hover text-sm cursor-pointer max-w-full btn-outline-black rounded">
          Star on GitHub
        </button>
      </a>
      {token != "" ? (
        <ProfileOptions />
      ) : (
        <a
          href={`https://www.reddit.com/api/v1/authorize.compact?client_id=${CLIENT_ID}&response_type=code&state=testing&redirect_uri=${REDIRECT_URI}&duration=temporary&scope=${encodeURIComponent(
            "read vote save identity subscribe"
          )}`}
        >
          <button className="my-4 ml-4 p-1 px-3 text-sm cursor-pointer max-w-full btn-black text-white outline-1px rounded">
            Login
          </button>
        </a>
      )}
    </div>
  );
};