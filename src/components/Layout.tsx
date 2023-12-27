import React from "react";
import { getTimeOfDay } from "../utils";
import { Props } from "../interfaces";
import { NavMenu } from "./molecules/NavMenu";
import TitleHead from "./TitleHead";

const Layout = ({ children, title, token }: Props) => (
  <div>
    <TitleHead title={title}>
      <meta
        name="description"
        content="The Reddit client for Silicon Valley. "
      />
      <meta property="og:url" content={process.env.DOMAIN} />
      <meta
        property="og:description"
        content="The Reddit client for Silicon Valley. "
      />
      <meta property="og:image" content={`${process.env.DOMAIN}/reddium-mockup.png`} />
    </TitleHead>
    <header>
      <nav className="flex items-center justify-center max-width-main mx-auto z-50 h-16 my-6">
        <div className="flex-grow flex items-center">
          <a href="/">
            <div className="pr-4 nav-img h-8 flex flex-row items-center cursor-pointer sm:border-0">
              <img className="h-full sm:h-6" src="reddium_symbol.svg" />
              <h1 className="ml-4 site-name text-3xl tracking-tighter sm:visible text-black">
                Medium
              </h1>
            </div>
          </a>
          <div className="pl-4">
            <h1 className="font-bold text-lg leading-6 nav-greeting sm:visible">
              {getTimeOfDay()}
            </h1>
          </div>
        </div>
        <NavMenu token={token} />
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
