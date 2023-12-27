import { DropdownProps } from "@/interfaces";
import { useEffect, useRef, useState } from "react";
import { zipObject } from "lodash";

export const Dropdown = ({
    id,
    dataObj,
    paramKey,
    paramVal,
    updateParams,
  }: DropdownProps) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdown = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (!showDropdown) return;
      function handleClick(e: any) {
        if (dropdown.current && !dropdown.current.contains(e.target)) {
          // setShowDropdown(false);
        }
      }
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    });
  
    return (
      <div className="w-full main-black">
        <button
          className="main-border mt-4 px-5 py-2 flex justify-between items-center w-48 max-w-full"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div className="w-full flex flex-row justify-between items-center">
            <div>{dataObj[id]}</div>
            <div>
              <img className="ml-3" src="/down_arrow.svg" />
            </div>{" "}
          </div>
        </button>
        {showDropdown ? (
          <div
            className="dropdown-select w-48 max-w-full absolute z-10"
            ref={dropdown}
          >
            {zipObject(paramKey, paramVal)[id].map((value: string, ind) => (
              <div
                className="my-1 px-4 mx-1 p-2 cursor-pointer"
                key={ind}
                onClick={() => {
                  updateParams({ ...dataObj, [id]: value });
                  setShowDropdown(false);
                }}
              >
                {value}
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  };